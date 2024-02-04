import styles from './Input.module.scss'
import {useRef, useState} from "react";

const Input = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef(null)

    const onClickClear = () => {
        setValue('')
        inputRef.current?.focus()
    }
    const onChangeInput = (event) => {
        setValue(event.target.value)
    }
    return (
        <div className={styles.root}>
            <input ref={inputRef} value={value} onChange={onChangeInput} className={styles.input}
                   placeholder="Search team or players"/>
            {
                value &&
                <svg
                    onClick={onClickClear}
                    className={styles.clearIcon}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/>
                </svg>
            }
        </div>
    );
}

export default Input;