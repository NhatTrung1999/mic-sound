import {useRef, useEffect } from 'react';

function ProfileInput({show, value, onChange}) {
    const ref = useRef(null);

    useEffect(() => {
        if (show) {
            ref.current.value = value;
            ref.current.select();
        }
    }, [show, value]);

    if (!show) {
        return null;
    }
    return (
        <input
            type="text"
            class={show ? "show" : ""}
            name="profile"
            id="profileEdit"
            defaultValue={value}
            ref={ref}
            onBlur={(e) => {
                onChange(e.target.value);
            }}
        />
    );
}

export default ProfileInput;