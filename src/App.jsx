import { useContext } from "react";
import { CardContext } from "./context/CardContext";
import PersonalCard from "./components/PersonalCard";
import CardCreate from "./components/CardCreate";

export default function App() {

  const { personalCard, setPersonalCard  } = useContext(CardContext);


  return (
    <div>
      <div className="personal-card">
        <h1>Personal Card</h1>
        <PersonalCard />
        <hr />
        <p>Deseja criar um cartão pessoal?</p>
        <button>Criar cartão</button>
      </div>
      <div className="card-create">
        <CardCreate />
      </div>
    </div>
  );
}