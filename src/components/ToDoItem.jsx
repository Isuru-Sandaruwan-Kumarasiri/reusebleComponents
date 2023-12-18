function ToDoItem({taskName,stat}) {  //argument pass wenne object wise
    
    return ( 
        <div>
            <h3><span>Task </span>{taskName}</h3>
            <button>{stat}</button>
            
        </div>
     );
}

export default ToDoItem;