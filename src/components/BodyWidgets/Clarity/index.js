import Slider from "../../Controls/Slider/";
import Checkbox from "../../Controls/Checkbox/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import {
    enableVoiceClarity,
    changeVoiceClarity,
} from "../../../features/micSound/micSlice";

function Clarity() {
    const { listData, selectedIndex } = useSelector((state) => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex,
        };
    });
    const dispatch = useDispatch();
    const getCheck = (checked) => {
        const valueChange = { id: selectedIndex, value: checked };
        dispatch(enableVoiceClarity(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(changeVoiceClarity(valueChange));
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
