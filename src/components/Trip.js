import "./TripStyle.css";
import TripData from "./TripData";
import Trip1 from "../assets/japan.jpeg";
import Trip2 from "../assets/Kurdistan.jpg";
import Trip3 from "../assets/france.jpg";

function Trip() {



    return(

<div className="trip">
<h1>Recent Trips</h1>
<p>You can discover unique destinations using Google Maps.</p>

<div className="tripcard">

<TripData 
image={Trip1}
heading="Trip in Japan"
text="Welcome to a realm where ancient traditions coexist harmoniously with cutting-edge innovation, creating an unparalleled tapestry of experiences. Japan, a land of serene temples, futuristic cities, and culinary artistry, beckons you to explore its diverse landscapes. From the bustling streets of Tokyo to the serene temples of Kyoto, every step reveals a new facet of this enchanting country.."

/>
<TripData 
image={Trip2}
heading="Trip in Kurdistan"
text="Welcome to Kurdistan, a land of captivating contrasts where ancient traditions intertwine with breathtaking landscapes. Nestled in the heart of the Middle East, this region invites you to discover its rich history, warm hospitality, and unspoiled beauty. From the vibrant bazaars of Erbil to the rugged mountains of Sulaymaniyah, every corner of Kurdistan offers a unique and unforgettable experience."

/>
<TripData 
image={Trip3}
heading="Trip in France"
text="Welcome to a land of timeless allure, where the echoes of history resonate through charming streets. France, a canvas painted with art, culture, and culinary brilliance, invites your exploration. From the iconic beauty of Paris to the sun-soaked beaches of the French Riviera, every corner has a story to tell. Join us in uncovering the magic that lies within this captivating nation."

/>


</div>
</div>

    );
}
export default Trip;