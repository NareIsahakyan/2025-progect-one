import img004 from "../../img/004.png";
import img005 from "../../img/005.png";
import img2 from "../../img/img2.png";
import Rezervation from "./Rezervation";

const Main = () => {
    return (
        <>
            <div className="main">

                <div className="icnx">

                    <div className="icn1">
                        <h4>TRY IT TODAY</h4>
                        <h2>MOST POPULAR BURGER</h2>
                    </div>

                    <div className="icny">
                        <div className="icn2">
                            <h4>TRY IT TODAY</h4>
                            <h2>MORE FUN<br />MORE TASTE</h2>
                        </div>
                        <div className="icn3">
                            <h4>TRY IT TODAY</h4>
                            <h2>FRESH & CHILI</h2>
                        </div>
                    </div>
                </div>

                <div className="tasty">
                    <h3>Always Tasty Burger</h3>
                    <h2>Choose & Enjoy</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                </div>

                <div className="ord">
                    <figure>
                        <img src={img004} className="figur" />
                        <h3>Lorem ipsum dolor</h3>
                        <figcaption>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do</figcaption>
                        <a href="#" className=""><p>Order Now</p> </a>
                    </figure>

                    <figure><img src={img005} className="figur" />
                        <h3>Lorem ipsum dolor</h3>
                        <figcaption>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do</figcaption>
                        <a href="#" className=""><p>Order Now</p></a>
                    </figure>

                    <figure><img src={img004} className="figur" />
                        <h3>Lorem ipsum dolor</h3>
                        <figcaption>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do</figcaption>
                        <a href="#" class=""><p>Order Now</p> </a>
                    </figure>
                </div>
                <div className="d2">
                    <div className="discover">
                        <div className="d1">
                            <h5>Discover</h5>
                            <h2>Upcoming Events</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor incididunt<br />
                                ut labore et dolore magna aliqua. Quis ipsum<br />
                                suspendisse ultrices gravida. Risus commodo<br /> viverra maecenas accumsan lacus vel facilisis.
                            </p>
                        </div>
                        <div className="disimg">
                            <img src={img2} method="GET" target="blank" />
                        </div>
                    </div>
                </div>
                <Rezervation />
            </div>
        </>
    )
}

export default Main;