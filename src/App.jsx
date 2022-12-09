//Components
import PersonalCard from "./components/PersonalCard";
import CardCreate from "./components/CardCreate";

//Hooks
import { useCard } from "./hooks/useCard";

export default function App() {

  const cardComponents = [<PersonalCard />, <CardCreate /> ];

  const {currentCard, currentComponent, changeCard} = useCard(cardComponents);

  return (
    <div className="content">
      <header>
        <h1>Personal Card</h1>
      </header>
      <main>
        <div className="personal-card">
          {currentComponent}
          <hr />
        </div>
      </main>
      <div className="card-create">
        <p>Deseja criar um cartão pessoal?</p>
        <button onClick={() => changeCard(currentCard + 1)}>Novo cartão</button>
        <button onClick={() => changeCard(currentCard -1)}>Gerar cartão</button>
      </div>
    </div>
  );
}