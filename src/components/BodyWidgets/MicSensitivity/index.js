import Slider from "../../Controls/Slider/";
import Switch from "../../Controls/Switch";
import { useSelector, useDispatch } from "react-redux";
import {
    enableMicSensitivity,
    changeMicSensitivity,
} from "../../../features/micSound/micSlice";

function MicSensitivity() {
    const { listData, selectedIndex } = useSelector((state) => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex,
        };
    });
    const dispatch = useDispatch();
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(enableMicSensitivity(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(changeMicSensitivity(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .micSensitivity.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .micSensitivity.value;

    return (
        <>
            <div className="h2-title mt20">
                mic sensitivity
                <Switch on={enabled} onChange={getSwitch} />
            </div>
            <div className="h2-body">
                Adjust this setting to remove unwanted background noise or
                increase the amount of mic output heard
            </div>
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

export default MicSensitivity;
