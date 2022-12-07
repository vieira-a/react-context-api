import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import PersonalCard from "./PersonalCard";

export default function Counter() {

  const { counter, setCounter, card, setCard, data, myName, setMyName } = useContext(CounterContext);

  const handleCounter = () => {
    setCounter(counter + 1);
  }

  const haldleUncounter = () => {
    setCounter(counter - 1);
  }
  
  const handleChangeName = () => {
    setMyName("Pedro")
  }

  // const handleChangeDataName = () => {
  //   setCard(card.name = "Anderson")
  //   console.log(card.name)
  // }

  const handleChangeDataName = () => {
    setCard(prev => ({ ...prev, 
      name: "Anderson",
      age: 39
    }))
  }


  return (
    <div>
      <h1>Componente Counter</h1>
      <h3>Altera o contador</h3>
      <button onClick={handleCounter}>Contar</button>
      <button onClick={haldleUncounter}>Descontar</button>
      <hr />
      <h3>Altera o nome</h3>
      <button onClick={handleChangeName}>Alterar variável nome</button>
      <button onClick={handleChangeDataName}>Alterar nome no array</button>
      <PersonalCard myName={myName} card={card}/>
    </div>
  )
}