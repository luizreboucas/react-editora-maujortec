const Card = (props) =>{
    return(
        <>
            <h3 className="titPagina">{props.tituloPagina}</h3>
            <button 
                type="button" 
                className="btn" 
                onClick={props.onAlterarTitulo}>
                Alterar Título da Página
            </button>
            <p>IBSN: {props.dados.ibsn}<br/>
            Título: {props.dados.titulo}<br/>
            Autor: {props.dados.autor}<br/>
            </p>
            <hr />

        </>
    )
}

export default Card;