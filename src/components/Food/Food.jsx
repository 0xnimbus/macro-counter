export default function Food(props) {
    
    return(
        <div className="post">
            <p className="title">{props.food._id}</p>
            <p className="content">{props.food.foods}</p>
            <p className="content">{props.food.calories}</p>
        </div>
    )
}