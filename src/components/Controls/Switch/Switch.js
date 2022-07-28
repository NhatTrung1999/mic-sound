import { useEffect, useState } from "react";

function Switch({ handleSwitch, onChange }) {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        setEnabled(!enabled);
        handleSwitch(!enabled)
    }, [enabled]);

    return (
        <div
            className={`switch ${enabled ? "on" : ""} switch-slider`}
            onClick={() => {
                typeof onChange === "function" && onChange(!enabled);
                setEnabled(!enabled);
            }}
            id="swPhone"
        >
            <div className="handle"></div>
        </div>
    );
}

export default Switch;
