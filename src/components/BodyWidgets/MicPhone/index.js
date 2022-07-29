import Switch from '../../Controls/Switch/Switch';
import Slider from '../../Controls/Slider/Slider';
import { useProfile, actions } from '../../../store';
function Microphone() {
    const [state, dispatch] = useProfile();
    const { selectedIndex, listData} = state;
    const getSwitch = (enable) => {
        const valueChange = { id: selectedIndex, value: enable };
        dispatch(actions.enableMic(valueChange));
    }
    const getRange = (val) =>{
        const valueChange = { id: selectedIndex, value : val};
        dispatch(actions.changeMicValue(valueChange));
    }
    return (
        <Switch
            text="microphone"
            title="title"
            getSwitch={getSwitch}
            more={<div className='h2-title'>mic volume</div>}
            changeValue = {listData.find((profile) => profile.id === selectedIndex).mic.enabled}
        >
            <Slider
                getRange = {getRange}
                valueRange = {listData.find((profile) => profile.id === selectedIndex).mic.value}
            />
        </Switch>
    )
}
export default Microphone;