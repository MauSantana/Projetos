
import { useCallback, useRef, useState } from 'react'
import classname from 'classname'

import styles from './styles.module.css'

const Select = ({ label, id, outline = true, height, options, ...props }) => {
    const [isFocused, setFocused] = useState(false)
    const [currentValue, setCurentValue] = useState('')

    const inputRef = useRef()

    const handleBlur = useCallback(() => {
        setCurentValue(inputRef.current.value)
        setFocused(false)
    }, [isFocused])

    return (
        <div className={classname(styles.select, {
            [styles.focused]: isFocused,
            [styles.hasValue]: currentValue.trim() !== "",
            [styles.outline]: outline
        })} style={{ height }}>
            <label id={`${id}-label`} htmlFor={id}>{label}</label>
            <select {...props} aria-labelledby={`${id}-label`} ref={inputRef} id={id} name={id} onFocus={() => setFocused(true)} onBlur={() => handleBlur()}>
                <option hidden value={undefined} />
                {
                    options.map(([value, text]) => <option value={value}>{text}</option>)
                }
            </select>
        </div>
    )
}

export default Select