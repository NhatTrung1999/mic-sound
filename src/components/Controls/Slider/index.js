import { useLayoutEffect, useRef, useCallback } from "react";
function Slider({ show = true, min = 10, max = 100, minium, maxium, value, onChange, disabled }) {
    const tipRef = useRef(null);
    const fillRef = useRef(null);
    const sliderRef = useRef(null);
    const sliderRange = useCallback(() => {
        const rangeSlider = sliderRef.current.getBoundingClientRect();
        const tipLeft = tipRef.current.getBoundingClientRect();
        const percent = (value - min) / (max - min);
        const position =
            percent * (rangeSlider.width - 16) - tipLeft.width / 2 + 8;

        const tipPosition = position;
        const fillWidth = percent * (rangeSlider.width - 16) + 8;

        tipRef.current.style.left = tipPosition + "px";
        fillRef.current.style.width = fillWidth + "px";
    }, [value, min, max]);
    useLayoutEffect(() => {
        sliderRange();
    }, [sliderRange]);
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
