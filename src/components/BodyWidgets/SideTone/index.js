import Slider from "../../Controls/Slider/";
import Switch from "../../Controls/Switch";
import { useProfile, actions } from "../../../store";

function SideTone() {
    const [state, dispatch] = useProfile();
    const { selectedIndex, listData } = state;
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(actions.enableSidetone(valueChange));
    };

    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeSidetone(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .sidetone.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .sidetone.value;

    return (
        <>
            <div className="title">
                sidetone
                <Switch
                    on={enabled}
                    onChange={getSwitch}
                />
            </div>
            <Slider
                min={10}
                max={100}
                minium='0'
                maxium='100'
                value={value}
                show={enabled}
                onChange={getRange}
                disabled={!enabled}
            />
        </>
    );
}

export default SideTone;
