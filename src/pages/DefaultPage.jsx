import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const Default = (props) => {
    return (
        <div className="bg-blue-950">
            <div className="max-w-7xl mx-auto">
                <TopBar />
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default Default;
