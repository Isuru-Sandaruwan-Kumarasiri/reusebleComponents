import ToDoItem from "./components/ToDoItem"


function App() {
  return (
    <>
     <ToDoItem taskName='01' stat='Done' btnColor="green"/>
     <ToDoItem taskName="02" stat="ToDo" btnColor="blue"/>
    </>
  )
}

export default App
