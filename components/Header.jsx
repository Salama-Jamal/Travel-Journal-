import Entry from "./Entry"
import earth from "/images/earth.png"
export default function Header() {
    return (
    <>
        <nav>
            <img src={earth} alt="Global icon" className="global-img" />
            <h1>my travel journal.</h1>
        </nav>
        <Entry />
    </>
    )
}


