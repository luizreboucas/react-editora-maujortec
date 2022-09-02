import { Component } from 'react';
import Home from './Home.js';
import Card from './Card.js';

/*const Principal = () =>{
    return(
        <main className="principal">
            <Home />
        </main>
    )
}

export default Principal;*/
class Principal extends Component{
    state = {
        tituloPagina : "Últimos Lançamentos",
        dados: {
            ibsn: "24345564745",
            titulo: "React",
            autor: "Maujor"
        }
    }

    handlerAlterarTitulo = () => {
        let titulo = "";
        this.state.tituloPagina === "Últimos Lançamentos" 
        ? (titulo = "Categoria Programação")
        : (titulo = "Últimos Lançamentos");

        this.setState({tituloPagina : titulo});
    };

    render(){
        return(
            <>
                <Card
                    tituloPagina={this.state.tituloPagina}
                    dados={this.state.dados}
                    onAlterarTitulo={this.handlerAlterarTitulo}/>
            </>
        )
    }
}

export default Principal;