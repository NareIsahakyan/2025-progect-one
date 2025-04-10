import logo from "../../img/logo.png";
import img01 from "../../img/01.png";

const Logos = () => {
    return (
        <>
            <div class="logo">
                <div class="icon">
                    <img src={logo} />
                </div>
                <div class="log">
                    <img src={img01} class="" />
                    <a href="#" class="log2">Express Delivery +1 234 567 890</a>
                </div>
            </div>
        </>
    )
}
export default Logos;