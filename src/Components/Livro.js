

const Livro = ({livro}) =>{
    return(
        <main className="principal">
            <div className="pag-livro">
                <h2>{livro.titulo}</h2>
                <div className="livro">
                    <img
                        src={"./imagens/capas/" + livro.id + ".jpg"}
                        alt="Thumbnail da capa do livro ..."
                        />
                    <ul>
                        <li>ISBN: {livro.isbn}</li>
                        <li>ANO: {livro.ano}</li>
                        <li>Páginas: {livro.paginas}</li>
                        <li>Preço: {livro.preco},00</li>
                    </ul>
                    <hr/>
                    <h3>Descrição do Livro</h3>
                    <p>{livro.descricao}</p>
                </div>
            </div>
        </main>
    )
}

export default Livro;