import React from "react";
import Container from "../components/container"; // Attention au chemin et à la casse

const Header: React.FC = () => {
  return (
    <nav className="bg-red">
      <div className="bg-blue-600 p-4">
        <Container>
          <div className="flex justify-between items-center">
            <div>
            <a
              className="no-underline text-white hover:text-orange-400"
              href="/"
            >
             LOGO
            </a>
            </div>
            <div>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="text-white  hover:text-orange-400">
                    Accueil
                  </a>
                </li>
                <li>
                  <a href="../pages/articlePages" className="text-white  hover:text-orange-400">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white  hover:text-orange-400">
                    À propos
                  </a>
                </li>
                <div>
                  <button className="bg-white rounded-md ml-11">
                    <a
                      href="#"
                      className="text-blue-600 p-2 hover:text-orange-400"
                    >
                      Contacte
                    </a>
                  </button>
                </div>
                
              </ul>
              
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Header;
