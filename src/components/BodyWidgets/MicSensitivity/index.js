import Switch from "../../Controls/Switch/Switch";
import Slider from "../../Controls/Slider/Slider";
import { useProfile, actions } from "../../../store";

function MicSensitivity() {
    const [state, dispatch] = useProfile();
    const { selectedIndex , listData } = state;
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(actions.enableMicSensitivity(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeMicSensitivity(valueChange));
    };

    return (
        <>
            <Switch
                title="h2-title mt20"
                text="mic sensitivity"
                more={
                    <div className="h2-body">
                        Adjust this setting to remove unwanted background noise
                        or increase the amount of mic output heard
                    </div>
                }
                getSwitch={getSwitch}
                changeValue={
                    listData.find((profile) => profile.id === selectedIndex).micSensitivity.enabled
                }
            >
                <Slider
                    getRange={getRange}
                    valueRange={
                        listData.find((profile) => profile.id === selectedIndex).micSensitivity.value
                    }
                />
            </Switch>
        </>
    );
}

export default MicSensitivity;
