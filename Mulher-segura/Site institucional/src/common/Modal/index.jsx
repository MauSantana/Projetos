import classnames from 'classnames'
import uniqueId from 'lodash.uniqueid'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import styles from './styles.module.css'

/**
 * General purpose modal
 *
 * Usage:
 *
 * <Modal>
 *   <ModalHeader> ... </ModalHeader>
 *   <ModalBody> ... </ModalBody>
 *   <ModalFooter> ... </ModalFooter>
 * </Modal>
 */
const Modal = ({
  children,
  handleClose,
  heightSize = 'auto',
  isOpen,
  shouldCloseOnOverlayClick = true,
  widthSize = 'medium',
}) => {
  const dialogRef = useRef(null)

  const [modalPortal] = useState(document.createElement('div'))

  useEffect(() => {
    if (isOpen) {
      dialogRef?.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    modalPortal.id = uniqueId('Modal_')
    document.getElementById('root')?.appendChild(modalPortal)
    return () => {
      document.getElementById('root')?.removeChild(modalPortal)
    }
  }, [])

  const handleKeyDown = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        e.preventDefault()
        handleClose()
      }
    },
    [handleClose],
  )

  const handleClickOverlay = useCallback(() => {
    if (shouldCloseOnOverlayClick) handleClose()
  }, [shouldCloseOnOverlayClick, handleClose])

  return ReactDOM.createPortal(
    isOpen && (
      <>
        <div
          className={styles.overlay}
          role="presentation"
          onClick={handleClickOverlay}
        />
        <div className={styles.stage} role="dialog">
          <div
            className={classnames(styles.container, {
              [styles.smallWidth]: widthSize === 'small',
              [styles.mediumWidth]: widthSize === 'medium',
              [styles.largeWidth]: widthSize === 'large',
              [styles.fullWidth]: widthSize === 'full',
              [styles.smallHeight]: heightSize === 'small',
              [styles.mediumHeight]: heightSize === 'medium',
              [styles.largeHeight]: heightSize === 'large',
              [styles.fullHeight]: heightSize === 'full',
              [styles.autoHeight]: heightSize === 'auto',
            })}
            role="presentation"
            tabIndex={0} // eslint-disable-line jsx-a11y/no-noninteractive-tabindex
            onKeyDown={handleKeyDown}
            ref={dialogRef}
          >
            {children}
          </div>
        </div>
      </>
    ),
    modalPortal,
  )
}

export const ModalHeader = ({
  children,
  handleClose,
  showCloseButton = true,
}) => (
  <div className={styles.header}>
    <div className={styles.headerContent}>{children}</div>
    {showCloseButton && (
      <button
        type="button"
        onClick={handleClose}
        onKeyPress={handleClose}
        className={styles.headerClose}
        aria-label="Close Modal"
      >
        ✕
      </button>
    )}
  </div>
)

export const ModalBody = ({ children }) => (
  <div className={styles.body}>
    <div className={styles.bodyContent}>{children}</div>
  </div>
)

export const ModalFooter = ({ children }) => (
  <div className={styles.footer}>
    <div className={styles.footerContent}>{children}</div>
  </div>
)

export default Modal
