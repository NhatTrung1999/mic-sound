import { useState, useEffect, useRef, useCallback } from "react";
import { useProfile } from "../../../store";

function Slider({ min = 10, max = 100, disabled, valueRange, getRange, minium, maxium }) {
    const tipRef = useRef(null);
    const fillRef = useRef(null);
    const sliderRef = useRef(null);
    const [value, setValue] = useState(valueRange);

    const [tipLeft, setTipLeft] = useState(29.48);
    const [sizing, setSizing] = useState(520);

    const [left, setLeft] = useState(
        ((value - min) / (max - min)) * ((sizing.width - 16) || 520) -
            (tipLeft.width || 29.48) / 2 +
            8 +
            "px"
    );
    const [width, setWidth] = useState(
        ((value - min) / (max - min)) * ((sizing.width - 16) || 520) + 8 + "px"
    );

    console.log(width)
    const handleChangeRange = (valRange) => {
        setValue(valRange);
        setLeft(
            ((valRange - min) / (max - min)) * ((sizing.width - 16) || 520) -
            (tipLeft.width || 29.48) / 2 +
                8 +
                "px"
        );
        setWidth(
            ((valRange - min) / (max - min)) * ((sizing.width - 16) || 520) + 8 + "px"
        );
        getRange(valRange);
    };
    const [state] = useProfile();
    const { selectedIndex } = state;
    useEffect(() => {
        const rangeBound = sliderRef.current.getBoundingClientRect();
        const tipBound = tipRef.current.getBoundingClientRect();
        setTipLeft(tipBound);
        setSizing(rangeBound);
        if (valueRange !== undefined) {
            setValue(valueRange);
            setLeft(
                ((valueRange - min) / (max - min)) * ((sizing.width - 16) || 520) -
                (tipLeft.width || 29.48) / 2 +
                    8 +
                    "px"
            );
            setWidth(
                ((valueRange - min) / (max - min)) * ((sizing.width - 16) || 520) +
                    8 +
                    "px"
            );
        }
    }, [selectedIndex]);

    return (
        <>
            <div className="foot min">{minium || "low"}</div>
            <div className="foot mid">medium</div>
            <div className="foot max">{maxium || "high"}</div>
            <div className="left" ref={fillRef} style={{ width: width }}></div>
            <div className="track"></div>
            <div className="slider-tip" ref={tipRef} style={{ left: left }}>
                {value}
            </div>
            <input
                type="range"
                ref={sliderRef}
                min={min}
                max={max}
                value={value}
                step="1"
                className="slider"
                disabled={disabled}
                onChange={(e) => handleChangeRange(e.target.value)}
            />
        </>
    );
}

export default Slider;
