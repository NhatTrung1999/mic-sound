import Checkbox from "../../Controls/Checkbox/Checkbox";
import Slider from "../../Controls/Slider";
import { useSelector, useDispatch } from 'react-redux';
import {enableAmbientNoiseReduction, changeAmbientNoiseReduction} from '../../../features/micSound/micSlice'

function Ambient() {
    const { listData, selectedIndex  } = useSelector(state => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex
        }
    })
    const dispatch = useDispatch();
    const getCheck = (checked) => {
        const valueChange = { id: selectedIndex, value: checked };
        dispatch(enableAmbientNoiseReduction(valueChange));
    };
    const getRange = (val) => {
        const valueChange = { id: selectedIndex, value: val };
        dispatch(changeAmbientNoiseReduction(valueChange));
    };

    const enabled = listData.find((profile) => profile.id === selectedIndex)
        .ambientNoiseReduction.enabled;
    const value = listData.find((profile) => profile.id === selectedIndex)
        .ambientNoiseReduction.value;

    console.log(enabled)
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
