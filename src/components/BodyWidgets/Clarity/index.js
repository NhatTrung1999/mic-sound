import Slider from "../../Controls/Slider/";
import Checkbox from "../../Controls/Checkbox/Checkbox";
import { useProfile, actions } from "../../../store";

function Clarity() {
    const [state, dispatch] = useProfile();
    const { selectedIndex, listData } = state;
    const getCheck = (checked) => {
        const valueChange = { id: selectedIndex, value: checked };
        dispatch(actions.enableVoiceClarity(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeVoiceClarity(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .voiceClarity.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .voiceClarity.value;

    return (
        <>
            <Checkbox
                title="Voice Clarity"
                valueCheck={enabled}
                getCheck={getCheck}
            />
            <Slider
                min={10}
                max={100}
                value={value}
                show={enabled}
                onChange={getRange}
            />
        </>
    );
}

export default Clarity;
