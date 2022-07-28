import { useState, useEffect, useRef } from "react";

function DropdownArea({ listData = [], selectedIndex = 0, onChange }) {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const event = (e) => {
            if (show && !dropdownRef.current.contains(e.target)) {
                setShow(false);
            }

            window.addEventListener("click", event);

            return () => window.removeEventListener("click", event);
        };
    }, [show]);

    return (
        <div className="dropdown-area" ref={dropdownRef}>
            <div
                id="profileDrop"
                className="s3-dropdown"
                onClick={() => setShow((old) => !old)}
            >
                <div className="selected">{listData[selectedIndex]}</div>
                <div className="icon expand"></div>
            </div>
            <div
                id="profileDropOpt"
                className={`s3-options flex ${show ? "expand" : ""}`}
            >
                {listData.map((profile, index) => (
                    <div
                        className={`option ${
                            selectedIndex === index ? "selected" : ""
                        }`}
                        key={index}
                        onClick={() => {
                            onChange({ value: listData, index });
                            setShow(false);
                        }}
                    >
                        {profile}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DropdownArea;
