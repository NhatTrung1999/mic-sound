import Checkbox from "../../Controls/Checkbox/Checkbox";
import Slider from "../../Controls/Slider";
import { useProfile, actions } from "../../../store";
import { useSelector, useDispatch } from 'react-redux';
import {enableAmbientNoiseReduction, changeAmbientNoiseReduction} from '../../../features/micSound'

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

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .ambientNoiseReduction.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .ambientNoiseReduction.value;

    return (
        <>
            <Checkbox
                title="Ambient Noise Reduction"
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

export default Ambient;
