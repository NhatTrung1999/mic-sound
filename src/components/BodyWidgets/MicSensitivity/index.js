import Slider from "../../Controls/Slider/";
import Switch from "../../Controls/Switch";
import { useProfile, actions } from "../../../store";

function MicSensitivity() {
    const [state, dispatch] = useProfile();
    const { selectedIndex, listData } = state;
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(actions.enableMicSensitivity(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeMicSensitivity(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .micSensitivity.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .micSensitivity.value;

    return (
        <>
            <div className="h2-title">
                mic sensitivity
                <Switch
                    on={enabled}
                    onChange={getSwitch}
                />
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
            />
        </>
    );
}

export default MicSensitivity;
