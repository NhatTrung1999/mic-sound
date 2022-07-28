import Switch from "../../Controls/Switch/Switch";
import Slider from "../../Controls/Slider/Slider";

function MicPhone() {
    return (
        <>
            <div class="title">
                microphone
                <Switch />
            </div>

            <div class="h2-title">mic volume</div>
            <Slider />
        </>
    );
}

export default MicPhone;
