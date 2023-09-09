import TopBar from "../components/TopBar.jsx";
import Footer from "../components/Footer.jsx";

const Default = (props) => {
    return (
        <div>
            <TopBar />
            {props.children}
            <Footer />
        </div>
    );
};

export default Default;