import React from "react";
import Container from "../components/container";

const ArticlePage: React.FC = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold"> Page d un Article </h1>
      <div>
        <div className="my-6 hover:shadow-lg border-2 border-blue-400 hover:border-orange-400 p-4 rounded-md">
          <h2>Article 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            non explicabo deleniti tenetur expedita quibusdam dicta! Quia,
            animi? Consequuntur reiciendis accusantium voluptatum! Odit maiores
            vitae, consequuntur id ipsa doloremque minima?
          </p>
        </div>

        <div className="my-6 hover:shadow-lg border-2 border-blue-400 hover:border-orange-400 p-4 rounded-md">
          <h2>Article 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            non explicabo deleniti tenetur expedita quibusdam dicta! Quia,
            animi? Consequuntur reiciendis accusantium voluptatum! Odit maiores
            vitae, consequuntur id ipsa doloremque minima?
          </p>
        </div>

        <div className="my-6 hover:shadow-lg border-2 border-blue-400 hover:border-orange-400 p-4 rounded-md">
          <h2>Article 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            non explicabo deleniti tenetur expedita quibusdam dicta! Quia,
            animi? Consequuntur reiciendis accusantium voluptatum! Odit maiores
            vitae, consequuntur id ipsa doloremque minima?
          </p>
        </div>
      </div>


      




    </Container>
  );
};

export default ArticlePage;
