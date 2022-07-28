function WidgetCol({children, position}) {
    return (
        <div className={`widget-col ${position === 'right' ? 'col-right' : 'col-left'} flex`}>
            {children}
        </div>
    );
}

export default WidgetCol;
