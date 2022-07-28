import { useState, useEffect, useRef } from "react";
import DeleteAlert from "../DeleteAlert";

function ProfileAction({
    onAdd,
    onRename,
    onDuplicate,
    onDelete,
    disableDel = false,
}) {
    const [show, setShow] = useState(false);
    const [showDelAlert, setShowDelAlert] = useState(false);

    const actionsRef = useRef(null);

    useEffect(() => {
        const event = (e) => {
            if (
                show &&
                actionsRef.current &&
                !actionsRef.current.contains(e.target)
            ) {
                setShow(false);
            }
        };

        window.addEventListener("click", event);

        return () => window.removeEventListener("click", event);
    }, [show]);

    return (
        <>
            <div
                className="dots3 hover-border"
                id="profileMenuToggle"
                onClick={() => setShow((prev) => !prev)}
                ref={actionsRef}
            >
                <div
                    className={`profile-act ${show ? "show" : ""}`}
                    id="profileMenu"
                >
                    <div className="act action" onClick={onAdd}>
                        add
                    </div>
                    <div className="act action">import</div>
                    <div className="act divider"></div>
                    <div className="act action" onClick={onRename}>
                        rename
                    </div>
                    <div className="act action" onClick={onDuplicate}>
                        duplicate
                    </div>
                    <div className="act action">export</div>
                    <div className="act divider"></div>
                    <div
                        className={`act action ${disableDel ? "disabled" : ""}`}
                        id="deleteAction"
                        onClick={(e) => {
                            if (disableDel) return;
                            e.stopPropagation();
                            setShowDelAlert(true);
                            setShow(false);
                        }}
                    >
                        delete
                    </div>
                </div>
            </div>

            <DeleteAlert
                show={showDelAlert}
                onConfirm={() => {
                    setShowDelAlert(false);
                    onDelete && onDelete()
                }}
                onCancel={() => {
                    setShowDelAlert(false)
                }}
            />
        </>
    );
}

export default ProfileAction;
