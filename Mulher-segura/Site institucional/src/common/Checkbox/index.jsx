
import { useState } from 'react'
import classname from 'classname'

import styles from './styles.module.css'

const Checkbox = ({ id, checked, children }) => {
    const [isChecked, setChecked] = useState(checked)

    return (
        <>
            <div
                className={classname(styles.checkboxWrapper, {
                    [styles.isChecked]: isChecked
                })}
                role="checkbox"
                aria-checked={isChecked}
                onClick={() => setChecked(!isChecked)}
            >
                <div>
                    <span className={styles.checkbox} />
                </div>
                <div>
                    {children}
                </div>
            </div>
            <input className={styles.realCheckbox} type="checkbox" id={id} name={id} checked={isChecked} />
        </>
    )
}

Checkbox.defaultProps = {
    checked: false
}

export default Checkbox