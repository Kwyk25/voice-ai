import Logo from "../assets/images/HeaderLogo.jpg"

function Header() {
    return (
        <body>
            <div>
                <img 
                className="mb-5"
                src={Logo}
                alt="Logo">
                </img>
            </div>
        </body>
    )
}
export default Header;