import { useLayoutEffect, useRef, useCallback } from "react";

function Slider({
    show = true,
    min = 10,
    max = 100,
    value = 55,
    step = 1,
    onChange,
}) {

    const tipRef = useRef(null);
    const fillRef = useRef(null);
    const sliderRef = useRef(null);

    const sliderLayout = useCallback(() => {
        const rangeInput = sliderRef.current.getBoundingClientRect();
        const tipDiv = tipRef.current.getBoundingClientRect();
        const percent = (value - min) / (max - min)

        const position = percent * (rangeInput.width - 16) - tipDiv.width / 2 + 8

        const tipPosition = position;
        const fillWidth = percent * (rangeInput - 16) + 8

        tipRef.current.style.left = tipPosition + 'px';
        fillRef.current.style.width = fillWidth + 'px'
    }, [value, min, max])

    useLayoutEffect(() => {
        sliderLayout();
    }, [sliderLayout])

    return (
        <div className={`slider-container ${show ? "on" : ""}`} id="slPhone">
            <div className="foot min"> low </div>
            <div className="foot mid">medium</div>
            <div className="foot max">high</div>
            <div className="left" ref={fillRef} style={{ width: 164.8 }}></div>
            <div className="track"></div>
            <div className="slider-tip" ref={tipRef} style={{ left: 150.058 }}>
                {value}
            </div>
            <input
                type="range"
                ref={sliderRef}
                min={min}
                max={max}
                value={value}
                step={step}
                className="slider"
                id="slPhoneRange"
                onChange={(e) => {
                    typeof onChange === "function" && onChange(parseInt(e.target.value, 10))
                }}
            />
        </div>
    );
}

export default Slider;
