import { useState, useEffect, useRef } from "react";

function ProfileAction({ onAdd, onRename, onDuplicate, onDelete }) {
    const [show, setShow] = useState(false);
    const ref = useRef(null);
    const clickShow = () => {
        setShow(!show);
    };

    useEffect(() => {
        const event = (e) => {
            if (show && ref.current && !ref.current.contains(e.target)) {
                setShow(false);
            }
        };
        window.addEventListener("click", event);
        return () => window.addEventListener("click", event);
    }, [show]);
    return (
        <div
            ref={ref}
            className={`dots3 hover-border ${show ? "active" : ""}`}
            id="profileMenuToggle"
            onClick={clickShow}
        >
            <div
                className={`profile-act ${show ? "show" : ""}`}
                id="profileMenu"
                onBlur={clickShow}
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
                    className="act action"
                    id="deleteAction"
                    onClick={onDelete}
                >
                    delete
                </div>
            </div>
        </div>
    );
}

export default ProfileAction;
