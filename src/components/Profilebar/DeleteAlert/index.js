import { useState } from "react";
import {useProfile, actions} from '../../../store'
function DeleteAlert({ handleDelete }) {
    const [state, dispatch] = useProfile();
    const { selectedIndex} = state;
    const [offDetele, setOffDetele]  = useState(true);
    const AceptDelete = ()=>{
        dispatch(actions.deleteProfile(selectedIndex));
        setOffDetele(!offDetele);
    }

    
    return (
        <div
            id="deleteAlert"
            className={`flex alert profile-del ${
                handleDelete === offDetele ? "show" : ""
            }`}
        >
            <div className="title">delete profile</div>
            <div className="body-text t-center">
                You're about to delete this profile. All bindings in this
                profile will be deleted.
            </div>
            <div className="thx-btn" id="deleteConfirm" onClick={AceptDelete}>
                delete
            </div>
        </div>
        
    );
}

export default DeleteAlert;
