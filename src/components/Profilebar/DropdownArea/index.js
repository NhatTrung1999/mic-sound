import { useState, useEffect, useRef } from "react";
import { useProfile, actions } from "../../../store";

function DropdownArea({showIP}) {
    const ref = useRef(null);

    const [expand, setExpand] = useState(false);
    const ExpandProfile = () => {
        setExpand(!expand);
    };

    const [closeInput, setCloseInput] = useState(true);
    const CheckOutInput = () => {
        setCloseInput(!closeInput);
    };
    const [state, dispatch] = useProfile();
    const { listData, selectedIndex } = state;
    const SelectProfile = (id) => {
        dispatch(actions.selectProfile(id));
        ExpandProfile();
    };
    const getName = (name) => {
        const valueChange = { id: selectedIndex, value: name };
        dispatch(actions.renameProfile(valueChange));
    };

    useEffect(() => {
        function event(e) {
            if (expand && !ref.current.contains(e.target)) setExpand(false);
        }
        window.addEventListener("click", event);
        return () => window.removeEventListener("click", event);
    }, [expand]);


    return (
        <>
            <input
                type="text"
                name="profile"
                id="profileEdit"
                maxLength="25"
                className={`${showIP === closeInput ? "show" : ""}`}
                onBlur={CheckOutInput}
                onChange={(e) => {
                    getName(e.target.value);
                }}
            />
            <div className="dropdown-area" ref={ref}>
                <div
                    id="profileDrop"
                    className={`s3-dropdown ${expand ? "expand" : ""}`}
                    onClick={ExpandProfile}
                >
                    <div className="selected">
                        {listData.find((c) => c.id === selectedIndex).name}
                    </div>
                    <div className="icon expand"></div>
                </div>
                <div
                    id="profileDropOpt"
                    className={`s3-options flex ${expand ? "expand" : ""}`}
                >
                    {listData.map((profile) => (
                        <div
                            key={profile.id}
                            id={profile.id}
                            className={`option ${
                                profile.id === selectedIndex ? "selected" : ""
                            }`}
                            onClick={() => {
                                SelectProfile(profile.id);
                            }}
                        >
                            {profile.name}
                        </div>
                    ))}
                </div>
            </div>
        </>
        
    );
}

export default DropdownArea;
