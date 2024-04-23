import CarrouselHome from "../components/carrousel";
import Gallery from "../components/gallery";
import ImgHome from "../components/imgHome";

const Home =()=>{
    return(
        <>
        <CarrouselHome/>
        <Gallery/>
        <ImgHome 
          imgSrc="/imgHome.png"
/>
        </>
    )
}
export default Home;