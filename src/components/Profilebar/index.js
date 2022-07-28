import Profilename from "./Profilename";
import DropdownArea from "./DropdownArea";
import ProfileAction from "./ProfileAction";

function Profilebar() {
    return (
        <div className="profile-bar flex">
            <div className="loader" tooltip="Syncing Profiles"></div>
            <div>profile</div>

            <Profilename /> 

            <DropdownArea />

            <ProfileAction />

            <div className="obm hover-border" tooltip="On-board Profiles"></div>
            <div className="divider"></div>
            <div className="batt batt-30" tooltip="30% Battery"></div>
        </div>
    );
}

export default Profilebar;
