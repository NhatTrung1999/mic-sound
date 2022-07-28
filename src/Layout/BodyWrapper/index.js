import Profilebar from '../../components/Profilebar'
import BodyWidget from '../../components/BodyWidgets';

function BodyWrapper() {
    return (
        <div className="body-wrapper scrollable">
            <Profilebar />
            <BodyWidget />
        </div>
    );
}

export default BodyWrapper;