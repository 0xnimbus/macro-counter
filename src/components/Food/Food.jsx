export default function Food(props) {
    
    return(
        <div className="post">
            <p className="content">{props.food.foods}</p>
            <p> </p>
            <p className="content">{props.food.calories} Cals</p>
        </div>
    )
}