function ToDoItem({taskName,stat,btnColor}) {  //argument pass wenne object wise
    
    return ( 
        <div>
            <h3><span>Task </span>{taskName}</h3>
            <button style={{backgroundColor:btnColor}}>{stat}</button>
            
        </div>
     );
}

export default ToDoItem;