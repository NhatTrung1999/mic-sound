import Tip from '../Tip'

function Widget({children}) {
    return (
        <div className="widget">
            <Tip />
            {children}
        </div>
    );
}

export default Widget;