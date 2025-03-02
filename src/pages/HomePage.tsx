import { useEffect, useState } from "react";
import Container from "../components/container";
import axios from "axios";
import { Link } from "react-router-dom";

interface IArticle {
    id: number;
    title: string;
    content: string;
}

const HomePages: React.FC = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/articles") // Corrigé : port 3000
            .then((response) => {
                console.log("Articles récupérés :", response.data); // Pour debug
                setArticles(response.data);
            })
            .catch((err) => {
                console.error("Erreur lors de la récupération des articles :", err);
            });
    }, []);

    return (
        <Container>
            <h1 className="text-3xl font-bold">Accueil - Liste des Articles</h1>
            <div>
                {articles.length > 0 ? (
                    <ul className="space-y-4">
                        {articles.map((article) => (
                            <li
                                key={article.id}
                                className="my-6 hover:shadow-lg border-2 border-blue-400 hover:border-orange-400 p-4 rounded-md"
                            >
                                <Link to={`/article/${article.id}`} className="text-blue-600 hover:underline">
                                    {article.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun article pour l’instant</p> // Pour voir si la liste est vide
                )}
            </div>
        </Container>
    );
};

export default HomePages;