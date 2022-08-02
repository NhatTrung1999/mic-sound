import Slider from "../../Controls/Slider/";
import Switch from "../../Controls/Switch";
import { useSelector, useDispatch } from "react-redux";
import { enableMic, changeMicValue } from "../../../features/micSound/micSlice";

function Microphone() {
    const { listData, selectedIndex } = useSelector((state) => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex,
        };
    });
    const dispatch = useDispatch();
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(enableMic(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(changeMicValue(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex).mic
        .enabled;
    const value = listData.find((profile) => profile.id === selectedIndex).mic
        .value;

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
