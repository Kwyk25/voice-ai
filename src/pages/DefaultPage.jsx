import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

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