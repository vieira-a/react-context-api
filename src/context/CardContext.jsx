import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardContextProvider = ({children}) => {
  
  const cardData = {
    name: "Anderson Vieira",
    occupation: "Desenvolvedor Frontend",
    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inc id",
    skills: ["JavaScript", "TypeScript", "React", "Sass"],
    social: ["LinkedIn", "GitHub"]
  };

  const [personalCard, setPersonalCard] = useState(cardData);

  return(
    <CardContext.Provider value={{personalCard, setPersonalCard}}>
      {children}
    </CardContext.Provider>
  )

}

