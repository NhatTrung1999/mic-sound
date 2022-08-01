import { useState} from "react";
import { useProfile, actions } from "../../../store";
function DeleteAlert({ handleDelete}) {
    const [state, dispatch] = useProfile();
    const { selectedIndex } = state;
    const [onDetele, setOnDetele] = useState(true);
    const Deleted = () => {
        dispatch(actions.deleteProfile(selectedIndex));
        setOnDetele(!onDetele);
    };

    return (
        <div
            id="deleteAlert"
            className={`flex alert profile-del ${
                handleDelete === onDetele ? "show" : ""
            }`}
        >
            <div className="title">delete profile</div>
            <div className="body-text t-center">
                You're about to delete this profile. All bindings in this
                profile will be deleted.
            </div>
            <div className="thx-btn" id="deleteConfirm" onClick={Deleted}>
                delete
            </div>
        </div>
    );
}

export default DeleteAlert;
