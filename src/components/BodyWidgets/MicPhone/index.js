import Switch from "../../Controls/Switch/Switch";
import Slider from "../../Controls/Slider/Slider";
import { useProfile, actions } from "../../../store";

function Micphone() {

    const [state, dispatch] = useProfile();

    const { listData, selectedIndex } = state;

    const enabledMicphone = (enable) => {
        const valueChange = { id: selectedIndex, value: enable}
        dispatch(actions.enableMic(valueChange))
    } 

    return (
        <>
            <div className="title">
                microphone
                <Switch
                    handleSwitch={enabledMicphone}
                    onChange={() => {
                        listData.find(item => item.id === selectedIndex).mic.enabled
                    }}
                />
            </div>
            <div className="h2-title">mic volume</div>
            <Slider
                min={10}
                max={100}
                // value={value}
                // show={enabled}
                onChange={() => {
                    listData.find(item => item.id === selectedIndex).mic.enabled
                }}
            />
        </>
    );
}

export default Micphone;
