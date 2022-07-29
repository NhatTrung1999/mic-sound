import Checkbox from "../../Controls/Checkbox/Checkbox";
import Slider from "../../Controls/Slider/Slider";
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

    return (
        <>
            <Checkbox
                title="Volume Normalization"
                getCheck={getCheck}
                valueCheck={
                    listData.find((profile) => profile.id === selectedIndex).voiceClarity.enabled
                }
            >
                <Slider
                    getRange={getRange}
                    valueRange={
                        listData.find((profile) => profile.id === selectedIndex).voiceClarity.value
                    }
                />
            </Checkbox>
        </>
    );
}

export default Clarity;
