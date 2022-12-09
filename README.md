# React Context API
Utilizado para transportar dados entre os componentes.
O Context API é uma alternativa à utilização de props, que compartilham informações entre os componentes em nível de árvore (hierárquico); através do Context é possível fazer compartilhamento em qualquer nível, inclusive de forma global.

## Como fazer
Basicamente, cria-se os arquivos context e provider, depois importa aonde deseja utilizar.

**1 - Criando o context**
Arquivo que conterá os dados a serem compartilhados.
*Convenções*
Utiliza-se uma estrutura de pasta src/context para armazenar os contextos.
Ao nomear o context, utiliza-se "nomeDoArquivoContext.js"

```
import { createContext, useState } from "react";
export const CounterContext = createContext();
```

**2 - Criando o provider**
Este componente serve para delimitar aonde o context será utilizado; é um componente que "abraça" a área de utilização. Pode ser utilizado no app.js ou index.js para ser aplicado de forma global, ou localmente "abraçando" o componente desejado.

```
export const CounterContextProvider = ({children}) => {
  const [counter, setCounter] = useState();
  return (
    <CounterContext.Provider value={{counter, setCounter}}>
      {children}
    </CounterContext.Provider>
  )
}
```
Note que o Provider é um componente.
`const [counter, setCounter] = useState();` será utilizado para gerenciar o estado de um contador.

**3 - Disponibilizando o context**
- Relizar a importação no componente desejado `import { CounterContextProvider } from "./context/CounterContext";` Neste caso foi importado no main.js para poder envolver o App.js
- Envolver o trecho do componente com o componente Provider.
```
<CounterContextProvider>
      <App />
    </CounterContextProvider>
```

**4 - Consumindo o context**

- Importação:
```
import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
```
- Seleção de dados (neste caso desestruturando a varável counter que se encontra no CounterContext)
`const { counter } = useContext(CounterContext);`

**5 - Alterando o context**

Para alterar os dados do context, é necessário realizar as devidas importações. Os valores são alerados geralmente utilizando hooks para gerenciamento de estados como useState.
O fato de o context poder ser compartilhado entre vários componentes faz com que as alterações sejam exibidas em todos os componentes em que o context estiver importado. Por este motivo, é interessante separar arquivos de contexto de acordo com as suas responsabilidades.

## Aplicação
Utilizei este projeto de exemplo para aplicar os conceitos de Context API aprendidos:
A ideia é aplicar os conxeitos ao projeto (PersonalCard)[https://github.com/vieira-a/personal-card], aonde preciso lidar com dados passados entre componentes.

Funcionamento deste projeto:
- O App.jsx, componente principal, exibe o componente PersonalCard.jsx, com dados pré-estabelecidos contidos no arquivo CardContext.jsx;
- O PersonalCard.jsx apenas exibe os dados do CardContext.jsx;
- O componente CardCreate.jsx contém o formulário responsável por alterar os dados do CardContext.jsx; 
- Ao acionar a função para criar um novo cartão, o CardCreate será exibido; o usuário poderá preencher as informações do formulário e em seguida dar o comando para Gerar o seu cartão pessoal. Com isso, o componente PersonalCard será exibido novamente, porém com as informações atualizadas.

Criei o custom hook useCard.jsx para gerenciar a passagem entre os componentes
