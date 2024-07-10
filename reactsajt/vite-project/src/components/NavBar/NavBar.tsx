import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="active">
            Početna
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="active">
            O nama
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className="active">
            Turniri
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="active">
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;


/*import React from "react"; 
import { NavLink } from "react-router-dom"; 
import "./NavBar.css";

const NavBar: React.FC = () => {
  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => { 
    console.log("Link clicked: ", event.currentTarget.innerText);
  };
    // Add your logic here to handle the click event console.log("Link clicked: ", event.currentTarget.innerText); };

    return (<nav> 
      <ul>
         <li> 
          <NavLink to="/" className="active" onClick={handleNavLinkClick}> Početna </NavLink> 
          </li> <li> <NavLink to="/about" className="active" onClick={handleNavLinkClick}> O nama </NavLink> 
          </li> <li> <NavLink to="/products" className="active" onClick={handleNavLinkClick}> Turniri </NavLink> 
          </li> <li> <NavLink to="/contact" className="active" onClick={handleNavLinkClick}> Kontakt </NavLink> </li> 
        </ul> 
    </nav>);
  };

  export default NavBar;*/
