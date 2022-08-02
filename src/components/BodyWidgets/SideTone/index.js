import Slider from "../../Controls/Slider/";
import Switch from "../../Controls/Switch";
import { useSelector, useDispatch } from "react-redux";
import { enableSidetone, changeSidetone } from "../../../features/micSound/micSlice";

function SideTone() {
    const { listData, selectedIndex } = useSelector((state) => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex,
        };
    });
    const dispatch = useDispatch();
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(enableSidetone(valueChange));
    };

    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(changeSidetone(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .sidetone.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .sidetone.value;

    return (
        <>
            <div className="title">
                sidetone
                <Switch on={enabled} onChange={getSwitch} />
            </div>
            <Slider
                min={10}
                max={100}
                minium="0"
                maxium="100"
                value={value}
                show={enabled}
                onChange={getRange}
                disabled={!enabled}
            />
        </>
    );
}

export default SideTone;
