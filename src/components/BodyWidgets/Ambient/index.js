import Checkbox from "../../Controls/Checkbox/Checkbox";
import Slider from "../../Controls/Slider/Slider";
import { useProfile, actions } from "../../../store";

function Ambient() {
    const [state, dispatch] = useProfile();
    const { selectedIndex, listData } = state;
    const getCheck = (checked) => {
        const valueChange = { id: selectedIndex, value: checked };
        dispatch(actions.enableAmbientNoiseReduction(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(actions.changeAmbientNoiseReduction(valueChange));
    };

    return (
        <>
            <Checkbox
                title="Ambient Noise Reduction"
                getCheck={getCheck}
                valueCheck={
                    listData.find((profile) => profile.id === selectedIndex).ambientNoiseReduction.enabled
                }
            >
                <Slider
                    getRange={getRange}
                    valueRange={
                        listData.find((profile) => profile.id === selectedIndex).ambientNoiseReduction.value
                    }
                />
            </Checkbox>
        </>
    );
}

export default Ambient;
