import Header from "../../components/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <p>
          Bienvenido a nuestra página de inicio. Aquí encontrarás información
          sobre reciclaje y sostenibilidad.
        </p>
      </div>
    </>
  );
};

export default Home;
