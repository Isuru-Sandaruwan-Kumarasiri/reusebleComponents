import PlayerCard from "./components/PlayerCard"
import ToDoItem from "./components/ToDoItem"


function App() {
  return (
    <>
     <ToDoItem taskName='01' stat='Done' btnColor="green"/>
     <ToDoItem taskName="02" stat="ToDo" btnColor="blue"/>

     <PlayerCard cricketerName="Pathum Nissanka" score="123" ininngs="23" average="7.45"></PlayerCard>
     <PlayerCard cricketerName="Pathum Nissanka" score="123" ininngs="23" average="7.45"></PlayerCard>
     <PlayerCard cricketerName="Pathum Nissanka" score="123" ininngs="23" average="7.45"></PlayerCard>
     <PlayerCard cricketerName="Pathum Nissanka" score="123" ininngs="23" average="7.45"></PlayerCard>
    </>
  )
}

export default App
