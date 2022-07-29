import {useState, useEffect} from 'react';
import { useProfile } from "../../../store";

function Switch({ title, text, more, getSwitch, changeValue, children }) {
    const [enabled, setEnabled] = useState(false);
    const ChangeSwitch = () => {
        setEnabled(!enabled);
        getSwitch(!enabled);
    };
    const [state] = useProfile();
    const { selectedIndex } = state;

    useEffect(() => {
        if (changeValue !== undefined) {
            setEnabled(changeValue);
        }
    }, [selectedIndex]);

    return (
        <>
            <div className={title}>
                {text}

                <div
                    className={`switch ${enabled ? "on" : ""} switch-Switch`}
                    onClick={ChangeSwitch}
                >
                    <div className="handle"></div>
                </div>
            </div>
            {more}
            <div className={`slider-container ${enabled ? "on" : ""}`}>
                {children}
            </div>
        </>
    );
}

export default Switch;
