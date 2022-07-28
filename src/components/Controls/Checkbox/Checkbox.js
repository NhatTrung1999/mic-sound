import { useEffect, useState } from "react";

function Checkbox({ title = "", checked = false, onChange }) {
    const [enabled, setEnabled] = useState(checked);

    useEffect(() => {
        setEnabled(checked);
    }, [checked]);

    return (
        <div className="check-item">
            <input type="checkbox" checked={checked} />
            <label
                className={`check-box ${enabled ? "checked" : ""}}`}
                onClick={() => {
                    typeof onChange === "function" && onChange(!enabled);
                    setEnabled(!enabled)
                }}
            >
                <div className="check-text">{title}</div>
            </label>
        </div>
    );
}

export default Checkbox;
