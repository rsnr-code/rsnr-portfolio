import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Header = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-lg bg-black navbar-dark py-3">
        <div class="container">
            <img src="/logo2.png" alt="" className="logo mx-4" />
            
            <div className="d-flex justify-content-center">
                
                    
                        <a href="#learn" class="icons"><BsTwitter /></a>
               
                        <a href="#questions" class="icons"><BsLinkedin /></a>
                    
                    
                        <a href="#instructors" class="icons"><BsGithub /></a>
                    
              
            </div>
        </div>
    </nav>
        </div>
     );
}
 
export default Header;