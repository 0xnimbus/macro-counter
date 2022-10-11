export default function Page(props) {
    
    if (props.page == 'home') {
        return(
            <div className="page">
                <h1> HOME</h1>
            </div>
        )
    } else if (props.page == 'meals') {
        return(
            <div className="page">
                <h1> MEALS </h1>
            </div>
        )
    } else if (props.page == 'foods') {
        return(
            <div className="page">
                <h1> FOODS </h1>
            </div>
        )
    } else {
        return(
            <div className="page">
                <h1> ERROR </h1>
            </div>
        )
    }
    
}