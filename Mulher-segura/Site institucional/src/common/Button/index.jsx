
import { useCallback, useRef, useState } from 'react'
import classname from 'classname'

import styles from './styles.module.css'

const Button = ({type, onClick, children}) => {
    return (
        <button className={styles.button} type={type} onClick={onClick}>{children}</button>
    )
}

Button.defaultProps = {
    onClick: () => {}
}

export default Button