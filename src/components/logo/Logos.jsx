import logo from "../../img/logo.png";
import img01 from "../../img/01.png";

const Logos = () => {
    return (
        <>
            <div className="logo">
                <div className="icon">
                    <img src={logo} />
                </div>
                <div className="log">
                    <img src={img01} className="" />
                    <a href="#" className="log2">Express Delivery +1 234 567 890</a>
                </div>
            </div>
        </>
    )
}
export default Logos;