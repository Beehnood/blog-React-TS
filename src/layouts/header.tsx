import React from "react";
import { Link } from "react-router-dom"; // Ajouté
import Container from "../components/container";

const Header: React.FC = () => {
    return (
        <nav className="bg-red-500"> {/* Corrigé */}
            <div className="bg-blue-600 p-4">
                <Container>
                    <div className="flex justify-between items-center">
                        <div>
                            <Link to="/" className="no-underline text-white hover:text-orange-400">
                                LOGO
                            </Link>
                        </div>
                        <div>
                            <ul className="flex space-x-4">
                                <li>
                                    <Link to="/" className="text-white hover:text-orange-400">
                                        Accueil
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/article/1" className="text-white hover:text-orange-400">
                                        Articles {/* Exemple, à ajuster */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="text-white hover:text-orange-400">
                                        À propos
                                    </Link>
                                </li>
                                <div>
                                    <button className="bg-white rounded-md ml-11">
                                        <Link to="/contact" className="text-blue-600 p-2 hover:text-orange-400">
                                            Contacte
                                        </Link>
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