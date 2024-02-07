import { UserContext } from "./UserContext"

//lo elementos hijos que este componente tendra dentro del mismo
//se coloca en el punto mas alto de nuestra pagina web, para meter a todos los elementos dentro del provider y para luego acceder mediante los hijos
export const UserProvider = ({ children }) => {


  return (
    <UserContext.Provider value={{ hola: 'mundo'}}>
        { children }
    </UserContext.Provider>
  )
}
