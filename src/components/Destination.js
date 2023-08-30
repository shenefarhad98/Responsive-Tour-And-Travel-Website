import Mountain1 from "../assets/borabora.jpeg";
import Mountain2 from "../assets/Borabora2.jpg";
import Mountain3 from "../assets/pexels-photo-1285625.jpeg";
import Mountain4 from "../assets/pexels-photo-12917074.jpeg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";

function Destination(){


    return(
        <div className="destination">
<h1>Popular Destination</h1>
<p>Tours afford you the chance to take in a lot, all within a specified timeframe.</p>

<DestinationData 
className="first-des"
heading="Bora Bora, French Polynesia"
text="Indulge in the lap of luxury on the captivating island of Bora Bora, nestled in the heart of the South Pacific. Known for its iconic overwater bungalows, crystal-clear turquoise waters, and serene ambiance, Bora Bora promises an unforgettable escape into paradise.
Experience opulence like no other in Bora Bora's world-renowned overwater bungalows. Perched above the luminous lagoon, these private sanctuaries offer direct access to the sea, allowing you to immerse yourself in the tranquil waters whenever you wish. "
img1={Mountain1}
img2={Mountain2}

/>

<DestinationData 
className="first-des-reverse"
heading="Santorini, Greece"
text="Discover the enchanting allure of Santorini, a captivating gem nestled in the embrace of the Aegean Sea. With its iconic white-washed architecture, stunning vistas, and a romantic atmosphere that enchants visitors, Santorini is a destination that transcends mere beauty.
As you set foot on the island, you'll be greeted by the postcard-perfect sight of white-washed buildings cascading down the rugged cliffs. This quintessential Cycladic architecture not only dazzles the eyes but reflects the island's history and traditions."
img1={Mountain3}
img2={Mountain4}

/>
        </div>
    );


}

export default Destination;