import Hero from "./components/Hero/Hero";
import HeroImg from "../../assets/home/hero-home-bg.png"
import Services from "./components/Services/Services";

const Home = () => {
    return (
        <>
            <Hero backgroundImage={HeroImg}/>
            <Services/>
        </>
    );
};

export default Home;
