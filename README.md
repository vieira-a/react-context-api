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
