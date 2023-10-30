import { useRef } from "react"
import { footerStyle } from "../../util/styles/FooterStyle";
import { footerLinkStyle } from "../../util/styles/LinkStyle";

function Footer() {

    const textRef = useRef(null)

    const handleMouseOver = () => {
        return textRef.current.style.color = "#4BFFFF"
    }

    const handleMouseLeave = () => {
        return textRef.current.style.color = "#ffffff"
    }

    return (
        <div style={footerStyle} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <p>Built by <a ref={textRef} style={footerLinkStyle} href="https://github.com/David4bay" rel="noopener noreferrer" target="_blank">David Sunday Bayode</a></p>
        </div>
    )
}

export default Footer;