
import marker from "../images/marker.png"
export default function Entry(){
    return ( 
        <article>
            <img src="https://images.benchmarkemail.com/client1232026/image17379479.jpg" alt="japan photo" className="japan"/>
            <div>
                <img src={marker} alt="Maps marker icon" className="marker"/>
                <span className="country">Hirosaki Park</span>
                <a href="">View on Google Maps</a>
            </div>
        </article>
    )
}
