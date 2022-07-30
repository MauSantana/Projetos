
import { useCallback, useRef, useState } from 'react'
import classname from 'classname'

import styles from './styles.module.css'

const Input = ({label, type, id, outline = true, height, ...props}) => {
    const [isFocused, setFocused] = useState(false)
    const [currentValue, setCurentValue] = useState('')

    const inputRef = useRef()

    const handleBlur = useCallback(() => {
        setCurentValue(inputRef.current.value)
        setFocused(false)
    }, [isFocused])
    
    return (
        <div className={classname(styles.input, {
            [styles.focused]: isFocused,
            [styles.hasValue]: currentValue.trim() !== "",
            [styles.outline]: outline
        })} style={{height}}>
            <label id={`${id}-label`} htmlFor={id}>{label}</label>
            <input {...props} aria-labelledby={`${id}-label`} ref={inputRef} type={type} id={id} name={id} onFocus={() => setFocused(true)} onBlur={() => handleBlur()} />
        </div>
    )
}

export default Input