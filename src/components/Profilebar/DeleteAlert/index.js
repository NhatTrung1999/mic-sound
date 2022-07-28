import { useEffect, useRef } from "react";

function DeleteAlert({ show, onConfirm, onCancel }) {
    const delRef = useRef(null);

    useEffect(() => {
        const event = (e) => {
            if (show && !delRef.current.contains(e.target)) {
                onCancel && onCancel();
            }
        };
        window.addEventListener("click", event);
        return () => window.removeEventListener("click", event);
    }, [show, onCancel]);

    return (
        <div
            id="deleteAlert"
            className={`flex alert profile-del ${show ? "show" : ""}`}
            ref={delRef}
        >
            <div className="title">delete profile</div>
            <div className="body-text t-center">
                You're about to delete this profile. All bindings in this
                profile will be deleted.
            </div>
            <div className="thx-btn" id="deleteConfirm"
                onClick={() => onConfirm && onConfirm()}
            >
                delete
            </div>
        </div>
    );
}

export default DeleteAlert;
