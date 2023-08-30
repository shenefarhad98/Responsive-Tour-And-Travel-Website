import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/pexels-photo-210012.jpeg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service(){

    return (

<>
<Navbar  />
<Hero 
cName= "hero-mid"
heroImg={ServiceImg}
title="Service"

         />
 <Trip />       
<Footer />
</>


    );



}
export default Service;