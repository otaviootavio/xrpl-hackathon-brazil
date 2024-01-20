import "./BigNews.css"

type Props = { imagem: string, titulo: string, descricao: string }

const BigNews = (props: Props) => {
    return (
        <div className="boxNewsBig">
            <div className="linha">
                <img src={props.imagem} alt="imagem" className="imagemBig"></img>
                <div className="coluna">
                    <h2>{props.titulo}</h2>
                    <h4>{props.descricao}</h4>
                </div>
            </div>
        </div>
    );

}

export default BigNews;