import Tip from '../Tip'

function Widget({tooltip, children, ...rest}) {
    return (
        <div className="widget" {...rest}>
            {tooltip && (<Tip description={tooltip} />)}
            {children}
        </div>
    );
}

export default Widget;