import { useState, useMemo } from "react";
import { useProfile, actions } from "../../store";
import DeleteAlert from "./DeleteAlert";
import ProfileAction from "./ProfileAction";
import DropdownArea from "./DropdownArea";

function Profilebar() {
    const [state, dispatch] = useProfile();
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
            id: state.listData.length,
            name: `new profile`,
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        };
        dispatch(actions.addProfile(newProfile));
    };

    const handleDuplicate = () => {
        dispatch(actions.dupProfile());
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
                onDelete={handleDelete}
                onDuplicate={handleDuplicate}
            />
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
