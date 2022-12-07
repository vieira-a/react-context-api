import { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = ({children}) => {

  // const name = 'Anderson';
  // const age = 39;

  let data = {name: 'Pedro', age: 6}
  
  const initialName = "Anderson";

  const [myName, setMyName] = useState(initialName)

  const [counter, setCounter] = useState(0);

  const [card, setCard] = useState(data);
  
  console.log(`Dados do contexto tratando nome como variável separada: ${myName}`)
  console.log(`Dados do contexto tratando nome contido no objeto data: ${card.name}`)

  return (
    <CounterContext.Provider value={{counter, setCounter, card, setCard, data, myName, setMyName}}>
      {children}
    </CounterContext.Provider>
  )
}