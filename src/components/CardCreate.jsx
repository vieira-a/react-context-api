import { useContext } from "react";
import { CardContext } from "../context/CardContext";

export default function CardCreate() {

  const { personalCard, setPersonalCard  } = useContext(CardContext);

  const handleChange = (e) => {
    setPersonalCard((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(personalCard)

  }
  // const handleCardCreate = () => {
  //   setPersonalCard(prev => ({ ...prev, 
  //     name: "Pedro",
  //     occupation: "Estudante",
  //   }))
  // }

  return(
    <div>
      <h1>Crie aqui o seu cartão pessoal</h1>
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