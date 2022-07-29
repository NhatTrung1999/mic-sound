import { useEffect, useState } from "react";
import {useProfile} from "../../../store"
 
function CheckBox({ title, getCheck, valueCheck, children }) {
    const [check, setCheck] = useState(false);
    const ChangeBox = (checked) => {
        setCheck(checked);
        getCheck(checked);
    };

    const handleCheck = () => {
        setCheck(!check);
    };
    const [state] = useProfile();
    const { selectedIndex } = state;
    useEffect(() => {
        if (valueCheck !== undefined) {
            setCheck(valueCheck);
        }
    }, [selectedIndex]);
    return (
        <>
            <div className="check-item">
                <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => {
                        ChangeBox(e.target.checked);
                    }}
                />
                <label className="check-box" onClick={handleCheck}>
                    <div className="check-text">{title}</div>
                </label>
            </div>
            <div className={`slider-container ${check ? "on" : ""}`}>
                {children}
            </div>
        </>
    );
}

export default CheckBox;
