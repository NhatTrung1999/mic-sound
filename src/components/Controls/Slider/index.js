import { useLayoutEffect, useRef, useCallback } from "react";
function Slider({ show = true, min = 1, max = 100, minium, maxium, value, onChange, disabled }) {
    const tipRef = useRef(null);
    const fillRef = useRef(null);
    const sliderRef = useRef(null);
    const computeLayout = useCallback(() => {
        const rangeBound = sliderRef.current.getBoundingClientRect();
        const tipBound = tipRef.current.getBoundingClientRect();
        const percent = (value - min) / (max - min);
        const position =
            percent * (rangeBound.width - 16) - tipBound.width / 2 + 8;

        const tipPosition = position;
        const fillWidth = percent * (rangeBound.width - 16) + 8;

        tipRef.current.style.left = tipPosition + "px";
        fillRef.current.style.width = fillWidth + "px";
    }, [value, min, max]);
    useLayoutEffect(() => {
        computeLayout();
    }, [computeLayout]);
    return (
        <div className={`slider-container ${show ? "on" : ""}`} id="slPhone">
            <div className="foot min">{minium || 'low' }</div>
            <div className="foot mid">medium</div>
            <div className="foot max">{maxium || 'high'}</div>
            <div className="left" ref={fillRef} style={{ width: 164.8 }}></div>
            <div className="track"></div>
            <div className="slider-tip" ref={tipRef} style={{ left: 150.058 }}>
                {value}
            </div>
            <input
                className="slider"
                type="range"
                ref={sliderRef}
                min={min}
                max={max}
                value={value}
                step="1"
                onChange={(e) => {
                    typeof onChange === "function" &&
                        onChange(parseInt(e.target.value, 10));
                }}
                disabled={disabled}
            />
        </div>
    );
}
export default Slider;
