import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";


const Hamburger = ({routes}) => {
    const [isOpen, setIsOpen] = useState(false)
    return<GiHamburgerMenu></GiHamburgerMenu>
}

export default Hamburger;