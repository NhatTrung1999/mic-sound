import Checkbox from "../../Controls/Checkbox/Checkbox";
import Slider from "../../Controls/Slider/";
import { useSelector, useDispatch } from "react-redux";
import {
    enableVolumeNormalization,
    changeVolumeNormalization,
} from "../../../features/micSound/micSlice";

function Normalization() {
    const { listData, selectedIndex } = useSelector((state) => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex,
        };
    });
    const dispatch = useDispatch();
    const getCheck = (checked) => {
        const valueChange = { id: selectedIndex, value: checked };
        dispatch(enableVolumeNormalization(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(changeVolumeNormalization(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .volumeNormalization.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .volumeNormalization.value;

    return (
        <>
            <Checkbox
                title="Volume Normalization"
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

export default Normalization;
