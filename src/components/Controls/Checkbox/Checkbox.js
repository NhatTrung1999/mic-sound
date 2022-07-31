import { useEffect, useState } from "react";
import {useProfile} from "../../../store"
 
function CheckBox({ title, checked, onChange }) {
    // const [check, setCheck] = useState(valueCheck);
    // const ChangeBox = (checked) => {
    //     setCheck(checked);
    //     getCheck(checked);
    // };

    // const handleCheck = () => {
    //     setCheck(!check);
    // };
    // const [state] = useProfile();
    // const { selectedIndex } = state;
    // useEffect(() => {
    //     if (valueCheck !== undefined) {
    //         setCheck(valueCheck);
    //     }
    // }, [valueCheck]);
    const [_checked, setChecked] = useState(checked);
    useEffect(() => {
        setChecked(checked);
    }, [checked]);
    return (
        <>
            {/* <div className="check-item">
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
            </div> */}
            <div className="check-item">
                <input type="checkbox" id="checkClarity" checked={checked} />
                <label
                    className={`check-box ${_checked ? "checked" : ""}`}
                    onClick={() => {
                        typeof onChange === "function" && onChange(!_checked);
                        setChecked(!_checked);
                    }}
                >
                    <div className="check-text">{title}</div>
                </label>
            </div>
        </>
    );
}

export default CheckBox;
