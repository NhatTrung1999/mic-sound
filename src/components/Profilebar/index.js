function Profilebar() {
    return (
        <div className="profile-bar flex">
            <div class="loader" tooltip="Syncing Profiles"></div>
            <div>profile</div>

            <div class="obm hover-border" tooltip="On-board Profiles"></div>
					<div class="divider"></div>
					<div class="batt batt-30" tooltip="30% Battery"></div>
        </div>
    );
}

export default Profilebar;
