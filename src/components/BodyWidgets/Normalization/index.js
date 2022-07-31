import Checkbox from "../../Controls/Checkbox/Checkbox";
import Slider from "../../Controls/Slider/";
import { useProfile, actions } from "../../../store";

function Normalization() {
    const [state, dispatch] = useProfile();
    const { selectedIndex, listData } = state;
    const getCheck = (checked) => {
        const valueChange = { id: selectedIndex, value: checked };
        dispatch(actions.enableVolumeNormalization(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeVolumeNormalization(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .volumeNormalization.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .volumeNormalization.value;

    return (
        <>
            <Checkbox
                title="Volume Normalization"
                checked={enabled}
                onChange={getCheck}
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

export default Normalization;
