import Logo from "./Logo.js"
import Navegacao from "./Navegacao.js"

const Topo = () =>{
    return(
        <header className="topo">
            <Logo/>
            <Navegacao/>
        </header>
    )
}

export default Topo;