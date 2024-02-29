import React, { useState } from "react";
import Card from "../Card.jsx";

const FormularioAnimales = () => {
  const [animalFavorito, setAnimalFavorito] = useState("");
  const [razaFavorita, setRazaFavorita] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (animalFavorito.length < 3 || animalFavorito.trim().startsWith(" ")) {
      setError(true);
      return;
    }

    if (razaFavorita.length < 6) {
      setError(true);
      return;
    }

    setError(false);
    console.log("Formulario enviado correctamente");
    console.log("Animal favorito:", animalFavorito);
    console.log("Raza favorita:", razaFavorita);

    //return (
    //<div>
    //<Card animalFavorito={animalFavorito} razaFavorita={razaFavorita} />
    //</div>
    //);
  };

  return (
    <div>
      <h1>Formulario de animales</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="animalFavorito">Animal favorito:</label>
        <input
          type="text"
          id="animalFavorito"
          name="animalFavorito"
          value={animalFavorito}
          onChange={(e) => setAnimalFavorito(e.target.value)}
        />
        <br />
        <label htmlFor="razaFavorita">Raza favorita:</label>
        <input
          type="text"
          id="razaFavorita"
          name="razaFavorita"
          value={razaFavorita}
          onChange={(e) => setRazaFavorita(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error ? (
        <p>Por favor chequea que la información sea correcta</p>
      ) : (
        <Card animalFavorito={animalFavorito} razaFavorita={razaFavorita} />
      )}
    </div>
  );
};

export default FormularioAnimales;
