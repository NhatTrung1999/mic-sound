import Slider from '../../Controls/Slider/';
import Switch from '../../Controls/Switch';
import { useProfile, actions } from "../../../store";
function Microphone() {
    const [state, dispatch] = useProfile();
    const { selectedIndex, listData } = state;
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(actions.enableMic(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeMicValue(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .mic.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .mic.value;

    return (
        <>
            <div className="title">
                microphone
                <Switch on={enabled} onChange={getSwitch} />
            </div>
            <div className="h2-title">mic volume</div>
            <Slider
                min={10}
                max={100}
                value={value}
                show={enabled}
                onChange={getRange}
                disabled={!enabled}
            />
        </>
    );
}
export default Microphone;
