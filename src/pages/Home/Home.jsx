import Hero from "./components/Hero/Hero";
import HeroImg from "../../assets/home/hero-home-bg.png"
import Services from "./components/Services/Services";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";

const Home = () => {
    return (
        <>
            <Hero backgroundImage={HeroImg}/>
            <Services/>
            <WhoWeAre/>
        </>
    );
};

export default Home;
