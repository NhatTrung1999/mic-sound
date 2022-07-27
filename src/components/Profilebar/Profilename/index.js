import { useEffect, useRef } from "react";

function Profilename({ show, value, onChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        if (show) {
            inputRef.current.value = value;
            inputRef.current.selecte();
        }
    }, [show, value]);

    if (!show) {
        return null;
    }

    return (
        <input
            type="text"
            className={show ? "show" : ""}
            name="profile"
            id="profileEdit"
            maxlength="25"
            onBlur={(e) => {
                onChange(e.target.value);
            }}
            ref={inputRef}
        />
    );
}

export default Profilename;
