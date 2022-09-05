import React,{Component} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topo from "./Components/Topo.js";
import Home from "./Components/Home.js";
import Catalogo from "./Components/Catalogo.js";
import NotFound from "./Components/NotFound.js";
import Rodape from "./Components/Rodape.js";
import "./index.css";
import Frontend from "./Components/Frontend.js";
import Programacao from "./Components/Programacao.js";
import Design from "./Components/Design.js";
import "./index.css";
import Livro from "./Components/Livro"
import axios from "axios";


class App extends Component {

  state = {
    livros: []
  }

  async componentDidMount(){
    try{
      const {data: livros} = await axios.get("/api/todosOsLivros.json");
      this.setState({livros});
    } catch (error){
      document.querySelectorAll(".principal")[0]
      .insertAdjacentHTML(
        "beforeend",
        "<p class='erro'>Mensagem de erro</p>"
      );
    }
  }

  render(){
    return (
     <Router>
      
        <Topo />
        <Routes>
          <Route exact path="/" element={<Home livros={this.state.livros}/>}></Route>
          <Route exact path="/frontend" element={<Frontend livros={this.state.livros}/>}></Route>
          <Route exact path="/programacao" element={<Programacao livros={this.state.livros}/>}></Route>
          <Route exact path="/design" element={<Design livros={this.state.livros}/>}/>
          <Route exact path="/catalogo" element={<Catalogo livros={this.state.livros}/>}/>
          <Route exact path="/livro/:livroSlug" element={props =>{
            const livro = this.state.livros.find(
              livro => livro.slug === props.match.params.livroSlug);
              if (livro) return <Livro livro={livro} />;
              else return <NotFound/>
          }}
          />
          <Route element = {<NotFound/>} />

        </Routes>
        <Rodape/>
     </Router>

  )}
  
}

export default App;
