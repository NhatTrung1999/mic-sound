import Switch from "../../Controls/Switch/Switch";
import Slider from "../../Controls/Slider/Slider";

function MicSensitivity() {
    return (
        <>
            <div class="h2-title mt20">
                mic sensitivity
                <Switch />
            </div>
            <div class="h2-body">
                Adjust this setting to remove unwanted background noise or
                increase the amount of mic output heard
            </div>
            <Slider />
        </>
    );
}

export default MicSensitivity;
