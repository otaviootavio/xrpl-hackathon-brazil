
type Props = {
    imagem: string;
    titulo: string;
    descricao: string;
};

const SmallNews = (props: Props) => {
    return (
        <div className="boxNews">
            <div className="coluna">
                <img src={props.imagem} alt="imagem" className="imagem" />
                <h2>{props.titulo}</h2>
                <h4>{props.descricao}</h4>
            </div>
        </div>
    );
};

export default SmallNews;
