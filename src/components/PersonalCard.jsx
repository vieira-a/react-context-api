import { useContext } from "react";
import { CardContext } from "../context/CardContext";

export default function PersonalCard() {

  const { personalCard, setPersonalCard  } = useContext(CardContext);
  
  return (    
    <div className="card-container">
      <div className="header">
        <h1>{personalCard.name}</h1>
        <h2>{personalCard.occupation}</h2>
      </div>
      <div className="content">
        <div className="about">
          <h4>Sobre</h4>
          <p>{personalCard.about}</p>
        </div>
        <div className="skills">
          <h4>Habilidades</h4>
          <p>{personalCard.skills[0]}</p>
          <p>{personalCard.skills[1]}</p>
          <p>{personalCard.skills[2]}</p>
          <p>{personalCard.skills[3]}</p>
        </div>
        <div className="social-networks">
          <h4>Contato</h4>
          <p>{personalCard.social[0]}</p>
          <p>{personalCard.social[1]}</p>
        </div>
      </div>
    </div>

  )
  
}