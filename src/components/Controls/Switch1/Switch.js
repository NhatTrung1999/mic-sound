import {useState, useEffect} from 'react';
import { useProfile } from "../../../store";

function Switch({ title, text, more, getSwitch, changeValue, enabled}) {
    const [on, setOn] = useState(enabled);
    const ChangeSwitch = () => {
        setOn(!on);
        getSwitch(!on);
    };
    const [state] = useProfile();
    const { selectedIndex } = state;

    useEffect(() => {
        if (changeValue !== undefined) {
            setOn(changeValue);
        }
    }, [selectedIndex]);

    return (
        <>
            <div className={title}>
                {text}

                <div
                    className={`switch ${on ? "on" : ""} switch-Switch`}
                    onClick={ChangeSwitch}
                >
                    <div className="handle"></div>
                </div>
            </div>
            {more}
        </>
    );
}

export default Switch;
