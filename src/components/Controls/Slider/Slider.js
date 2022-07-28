function Slider() {
    return (
        <div className="slider-container" id="slPhone">
            <div className="foot min">low</div>
            <div className="foot mid">medium</div>
            <div className="foot max">high</div>
            <div
                
                className="left"
                style={{ width: '260px' }}
                
            ></div>
            <div className="track"></div>
            <div
                
                className="slider-tip"
                style={{ left: '245.258px' }}
                
            >
                {55}
            </div>
            <input
                type="range"
                min="10"
                max="100"
                value="55"
                step="1"
                className="slider"
                id="slPhoneRange"
            />
        </div>
    );
}

export default Slider;
