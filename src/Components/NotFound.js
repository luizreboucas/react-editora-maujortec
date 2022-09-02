import { Link } from "react-router-dom"


const NotFound = () =>{
    return(
        <main className="principal">
            <h2>404!</h2>
            <p>Página Não Encontrada ou Removida.
                <Link to="/">Ir Para Home Page</Link>
            </p>
        </main>
    )
}

export default NotFound;