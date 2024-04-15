import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = () => {

    const { user } = useContext( UserContext );

    return (
      <>
          <h1>HomePage <small>Hola { user?.name }</small></h1>
          <hr/>
      </>
    )
  }