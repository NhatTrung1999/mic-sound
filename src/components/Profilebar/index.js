import { useState, useEffect, useRef} from "react";
import {useProfile, actions} from '../../store'
import DeleteAlert from './DeleteAlert'
import DropdownArea from "./DropdownArea";
import ProfileAction from "./ProfileAction";

function Profilebar() {

    const [state, dispatch] = useProfile();
    const { listData } = state;
    const [showDelete, setShowDelete] = useState(false);
    const handleDelete = () => {
        setShowDelete(!showDelete);
    }

    const [show, setShow] = useState(false);
    const handleRename = () => {
        setShow(!show);
    }
    
    const handleAddProfile = () => {
        const newProfile = {
            id: listData.length,
            name: `new profile`,
            mic: {
                enabled: false,
                value: 55,
            },
            micSensitivity: {
                enabled: false,
                value: 55,
            },
            sidetone: {
                enabled: false,
                value: 50,
            },
            volumeNormalization: {
                enabled: false,
                value: 50,
            },
            ambientNoiseReduction: {
                enabled: false,
                value: 50,
            },
            voiceClarity: {
                enabled: false,
                value: 50,
            },
        }
        dispatch(actions.addProfile(newProfile));
    }
    
    return (
        <div className="profile-bar flex">
            <div className="loader" tooltip="Syncing Profiles"></div>
            <div>profile</div>

            <DropdownArea
                showIP={show}
            />
            <ProfileAction
                onAdd={handleAddProfile}
                onRename={handleRename}
                onDelete={handleDelete} />
            <DeleteAlert
                handleDelete={showDelete}
            />

            <div className="obm hover-border" tooltip="On-board Profiles"></div>
            <div className="divider"></div>
            <div className="batt batt-30" tooltip="30% Battery"></div>
        </div>
    );
}

export default Profilebar;
