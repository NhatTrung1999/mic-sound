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
                <Widget id="micPhone">
                    <MicPhone />
                    <MicSensitivity />
                </Widget>
            </WidgetCol>
            <WidgetCol position="right">
                <Widget id="micSidetone">
                    <SideTone />
                </Widget>
                <Widget id="micEnhance">
                    <div className="title">enhancements</div>
                    <Normalization />
                    <Ambient />
                    <Clarity />
                </Widget>
            </WidgetCol>
        </div>
    );
}

export default BodyWidget;
