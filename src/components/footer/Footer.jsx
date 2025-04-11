import logo1 from "../../img/logo1.png";
const Footer =()=>{
    return(
<>
<footer>
    <div className="foot">
        <div className="foot2">
       <div className="icon1">
                    <img src={logo1}/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/>
                     do eiusmod tempor incididunt ut labore et dolore magna<br/> 
                     aliqua. Quis ipsum suspendisse ultrices gravida. Risus<br/> commodo viver ra maecenas accumsan lacus vel facilisis. </p>
            </div>
               <div className="icon2">
                 <ul>
                     <li>
                      <i className="fas fa-map-marker-alt"></i>
                      <a href="#">Main Road, Building Name, Country </a>  
                     </li>
                     <li>
                      <i className="fas fa-envelope-square"></i>
                       <a href="#">info@companyname.com </a> 
                     </li>
                 </ul>  
               </div>
        </div>

            <div className="foot1">
             <div>
            <h6>© Company Name 2020. All rights reserved.</h6>
            </div> 
             <div>
                <ul>
                    <li>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                         <a href="#"><i className="fab fa-facebook-square"></i></a>
                         <a href="#"><i className="fab fa-twitter-square"></i></a>
                         <a href="#"><i className="fab fa-whatsapp"></i></a>
                     </li>
                </ul>
             </div>  
            </div>
    </div>
</footer>
</>
    )
}
export default Footer;