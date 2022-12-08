/**
 * This componente will edit the context data on CardContext.jsx
 */

//Context imports
import { useContext } from "react";
import { CardContext } from "../context/CardContext";

export default function CardCreate() {
  //Show and edit
  const { personalCard, setPersonalCard  } = useContext(CardContext);

  //Take input datas
  const handleChange = (e) => {
    setPersonalCard((prev) => {
      return {
        ...prev, [e.target.name]: e.target.value
      }
    })
  }
  
  //Create card
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personalCard)
  }
  
  return(
    <div>
      <h1>#Componente CardCreate</h1>
      <form action="submit">
        <label htmlFor="name">Nome
        <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleChange} />
        </label>
        <label htmlFor="occupation">Profissão
        <input type="text" name="occupation" placeholder="Digite a sua profissão" onChange={handleChange} />
        </label>
      </form>
      <button onClick={handleSubmit}>Gerar cartão</button>
    </div>
  )
}