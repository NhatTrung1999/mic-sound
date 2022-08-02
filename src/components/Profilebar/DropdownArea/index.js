import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, renameProfile} from "../../../features/micSound/micSlice";

function DropdownArea({ showIP }) {
    const ref = useRef(null);

    const { listData, selectedIndex } = useSelector((state) => {
        return {
            listData: state.mic.listData,
            selectedIndex: state.mic.selectedIndex,
        };
    });
    const dispatch = useDispatch();
    const [expand, setExpand] = useState(false);
    const ExpandProfile = () => {
        setExpand(!expand);
    };

    const [closeInput, setCloseInput] = useState(true);
    const CheckOutInput = () => {
        setCloseInput(!closeInput);
    };
    const selectedProfileId = (id) => {
        dispatch(selectProfile(id));
        ExpandProfile();
    };
    const changeName = (name) => {
        const valueChange = { id: selectedIndex, value: name };
        dispatch(renameProfile(valueChange));
    };

    useEffect(() => {
        function event(e) {
            if (expand && !ref.current.contains(e.target)) setExpand(false);
        }
        window.addEventListener("click", event);
        return () => window.removeEventListener("click", event);
    }, [expand]);

    const inputRef = useRef(null);

    useEffect(() => {
        if (showIP) {
            inputRef.current.focus();
            inputRef.current.select();
        } else {
            inputRef.current.select();
        }
    }, [showIP]);

    const selectedProfile = listData.find(
        (profile) => profile.id === selectedIndex
    );

    return (
        <>
            <input
                type="text"
                name="profile"
                id="profileEdit"
                maxLength="25"
                className={`${showIP === closeInput ? "show" : ""}`}
                onBlur={CheckOutInput}
                value={selectedProfile.name}
                onChange={(e) => {
                    changeName(e.target.value);
                }}
                ref={inputRef}
            />
            <div className="dropdown-area" ref={ref}>
                <div
                    id="profileDrop"
                    className={`s3-dropdown ${expand ? "expand" : ""}`}
                    onClick={ExpandProfile}
                >
                    <div className="selected">{selectedProfile.name}</div>
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
                                selectedProfileId(profile.id);
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
