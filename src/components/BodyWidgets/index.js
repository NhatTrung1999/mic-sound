import WidgetCol from "./WidgetCol";
import Widget from "./Widget";
import MicPhone from "./MicPhone";
import MicSensitivity from "./MicSensitivity";
import SideTone from "./SideTone";
import Normalization from "./Normalization";
import Ambient from "./Ambient";
import Clarity from "./Clarity";

function BodyWidget() {
    return (
        <div className="body-widgets flex">
            <WidgetCol>
                <Widget>
                    <MicPhone />
                    <MicSensitivity />
                </Widget>
            </WidgetCol>
            <WidgetCol position="right">
                <Widget>
                    <SideTone />
                </Widget>
                <Widget>
                    <div class="title">enhancements</div>
                    <Normalization />
                    <Ambient />
                    <Clarity />
                </Widget>
            </WidgetCol>
        </div>
    );
}

export default BodyWidget;
