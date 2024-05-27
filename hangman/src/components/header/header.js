import { FaGamepad, FaMailBulk } from "react-icons/fa"
import './header.css'

const Header = () => {

    return (
        <>
            <FaGamepad style={{ margin: "5px" }} size={"25px"} color="#FFFFFF" />
            <p className="headerText">Welcome!</p>
            <a href="mailto:anandson47@gmail.com" style={{ margin: "5px" }}><FaMailBulk color="#FFFFFF" size={"25px"} /></a>
        </>
    )
}

export default Header