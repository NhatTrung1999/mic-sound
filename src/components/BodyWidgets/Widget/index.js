import Tip from '../Tip'

function Widget({children, ...props}) {
    return (
        <div className="widget" { ...props } >
            <Tip />
            {children}
        </div>
    );
}

export default Widget;