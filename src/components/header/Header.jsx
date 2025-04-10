import Logos from "../logo/Logos";
import Navbar from "../navbar/Navbar";
import img1 from "../../img/img1.png"
const Header = () =>{
return(
    <>
      <header class="header">
    <Logos/>
    <Navbar/>
    <div class="lg">
                <div class="tx">
                    <h6>IT IS GOOD TIME FOR THE GREAT TASTEA OF BURGERS</h6>
                    <h1>BURGER</h1>
                    <h3>WEEK</h3>
                </div>
                 <div class="icon1">
                  <img src={img1} class=""/> 
                  <div class="price">
                      <h2>$5<sub>.49</sub></h2>
                      <h3>ONLY</h3>
                  </div>
            </div>
        </div>
    </header>
    </>
)
}
export default Header;