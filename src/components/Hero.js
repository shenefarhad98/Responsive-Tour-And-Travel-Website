import "./HeroStyle.css";

function Hero(props){

    return (
         <>
     <div className={props.cName}>

     {props.heroVideo ? ( 
          <video src={props.heroVideo} autoPlay loop muted className="hero-video" />
        ) : (
          <img src={props.heroImg} alt="HeroImg" className="hero-image" />
        )}  
    
    

<div className="hero-text">
<h1>{props.title}</h1>
<p>{props.text}</p>
<a href={props.url} className={props.btnClass}>{props.buttonText}</a>
</div>




  </div>

         </>


    );



}
export default Hero;