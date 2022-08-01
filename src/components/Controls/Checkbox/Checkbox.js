import { useEffect, useState } from "react";
 
function CheckBox({ title, valueCheck, getCheck }) {
    const [check, setCheck] = useState(valueCheck);
    const handleCheck = () => {
        getCheck(!check);
    };

    useEffect(() => {
        if (valueCheck !== undefined) {
            setCheck(valueCheck);
        }
    }, [valueCheck]);
    return (
        <>
            <div className="check-item">
                <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => {
                        getCheck(e.target.checked);
                    }}
                />
                <label className="check-box" onClick={handleCheck}>
                    <div className="check-text">{title}</div>
                </label>
            </div>
        </>
    );
}

export default CheckBox;
