export default function Page(props) {

// HOME PAGE
    if (props.page == 'Home') {
        return(
            <div className="page-Div">
                <h1 className='Page-Guts'> HOME</h1>

              
            </div>
        )

// MEALS PAGE
    } else if (props.page == 'Meals') {
        return(
            <div className="page-Div">
                <h1 className='page-Guts'> MEALS </h1>
            </div>
        )

// FOODS PAGE
    } else if (props.page == 'Foods') {
        return(
            <div className="page-Div">
                <h1 className='page-Title'> FOODS </h1>

                <table className='food-Table'>
                    <tr>
                        <th> Food 1 </th>
                        <th> Protein 1 </th>
                        <th> Carbs 1 </th>
                        <th> Fat 1 </th>
                        <th> Total Cals 1 </th>
                    </tr>
                    <tr>
                        <th> Food 2 </th>
                        <th> Protein 2 </th>
                        <th> Carbs 2 </th>
                        <th> Fat 2 </th>
                        <th> Total Cals 2 </th>
                    </tr>
                    <tr>
                        <th> Food 3 </th>
                        <th> Protein 3 </th>
                        <th> Carbs 3 </th>
                        <th> Fat 3 </th>
                        <th> Total Cals 3 </th>
                    </tr>
                </table>
                <div>
                    <h1>
                    <p className="title">{props.foods._id}</p>
                    <p className="content">{props.foods.content}</p>
                    </h1>
                    <h1>
                    </h1>
                </div> 
            </div>
        )

// ERROR PAGE         
    } else {
        return(
            <div className="page-Div">
                <h1 className='page-Title'> ERROR </h1>
            </div>
        )
    }
    
}