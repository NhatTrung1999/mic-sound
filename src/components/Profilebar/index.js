import { useState } from "react";
import DeleteAlert from "./DeleteAlert";
import ProfileAction from "./ProfileAction";
import DropdownArea from "./DropdownArea";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, dupProfile } from "../../features/micSound/micSlice";

function Profilebar() {
    const [showDelete, setShowDelete] = useState(false);
    const { listData, selectedIndex } = useSelector((state) => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex,
        };
    });
    const dispatch = useDispatch();
    const handleDelete = () => {
        setShowDelete(!showDelete);
    };

    const [show, setShow] = useState(false);
    const handleRename = () => {
        setShow(!show);
    };

    const handleAddProfile = () => {
        const newProfile = {
            id: listData.length,
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
        dispatch(addProfile(newProfile));
    };

    const handleDuplicate = () => {
        const selectedProfile = listData.find(
            (profile) => profile.id === selectedIndex
        );
        const newProfile = {
            id: listData.length,
            name: `${selectedProfile.name}`,
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
        dispatch(dupProfile(newProfile));
    };

    return (
        <div className="profile-bar flex">
            <div className="loader" tooltip="Syncing Profiles"></div>
            <div>profile</div>

            <DropdownArea showIP={show} />
            <ProfileAction
                onAdd={handleAddProfile}
                onRename={handleRename}
                onDelete={handleDelete}
                onDuplicate={handleDuplicate}
                disableDelete={listData.length === 1}
            />
            <DeleteAlert handleDelete={showDelete} />

            <div className="obm hover-border" tooltip="On-board Profiles"></div>
            <div className="divider"></div>
            <div className="batt batt-30" tooltip="30% Battery"></div>
        </div>
    );
}

export default Profilebar;
