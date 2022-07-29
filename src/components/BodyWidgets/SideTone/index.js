import Switch from "../../Controls/Switch/Switch";
import Slider from "../../Controls/Slider/Slider";
import {useProfile, actions} from '../../../store'

function SideTone() {

    const [state, dispatch] = useProfile();
    const { selectedIndex, listData } = state;
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(actions.enableSidetone(valueChange));
    }

    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeSidetone(valueChange));
    }

    return (
        <>
            <Switch
                title="title"
                text="sidetone"
                getSwitch={getSwitch}
                changeValue={
                    listData.find((profile) => profile.id === selectedIndex).sidetone.enabled
                }
            >
                <Slider
                    minium="0"
                    maxium="100"
                    getRange={getRange}
                    valueRange={
                        listData.find((profile) => profile.id === selectedIndex).sidetone.value
                    }
                />
            </Switch>
        </>
    );
}

export default SideTone;
