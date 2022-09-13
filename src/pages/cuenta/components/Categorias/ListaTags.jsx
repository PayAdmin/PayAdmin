// Dependencias.
import React from "react";
import { Chip } from "@mui/material";

// Estilos.
import "./ListaTags.scss";

// Definiendo el componente: <ListaTags />
const ListaTags = ({ tags }) => {
  // --- Metodos.
  const handleDelete = (tagId) => {
    console.log(tagId);
  };

  // --- Renderizado.
  return (
    <div className="ListaTags_container">
      {tags.map((tag, index) => {
        return (
          <Chip
            key={index}
            label={tag.nombre}
            onDelete={() => handleDelete(tag.id)}
            variant="filled"
          />
        );
      })}
    </div>
  );
};

// Exportación.
export default ListaTags;
