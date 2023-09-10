import { footerStyle } from "../../util/styles/FooterStyle";
import { footerLinkStyle } from "../../util/styles/LinkStyle";


function Footer() {
    return (
        <div style={footerStyle}>
            <p>Made by <a style={footerLinkStyle} href="https://github.com/David4bay" rel="noopener noreferrer" target="_blank">David Sunday Bayode</a></p>
        </div>
    )
}

export default Footer;