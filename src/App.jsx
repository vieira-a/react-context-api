//Components
import PersonalCard from "./components/PersonalCard";
import CardCreate from "./components/CardCreate";

export default function App() {

  return (
    <div>
      <div className="personal-card">
        <h1>#Componente App.js</h1>
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