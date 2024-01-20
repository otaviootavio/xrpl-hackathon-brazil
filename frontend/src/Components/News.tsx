import BigNews from "./BigNews/BigNews";
import "./News.css"
import SmallNews from "./SmallNews/SmallNews";

const News = () => {
  return (
    <>
      <div className="coluna">
        <BigNews imagem="../../public/1.jpg" titulo="Titulo 1" descricao="Descricao 1" />
      <div className="noticias">
        <SmallNews imagem="../../public/1.jpg" titulo="Titulo 1" descricao="Descricao 1" />
        <SmallNews imagem="../../public/2.jpg" titulo="Titulo 2" descricao="Descricao 2" />
        <SmallNews imagem="../../public/3.jpeg" titulo="Titulo 3" descricao="Descricao 3" />
      </div>
      </div>
    </>
  );
};

export default News;