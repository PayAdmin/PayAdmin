// Dependencias.
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import {FaSignInAlt, FaInfoCircle, FaBoxOpen, FaGithub} from "react-icons/fa"
import Modal from "@mui/material/Modal";
import { makeStyles } from "@material-ui/core/styles";
// Estilos.
import "./IndexPage.scss";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    height: 700,
    backgroundColor: "white",
    boxShadow: 24,
    padding: "80px 32px  40px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

// Definición de la pagina.
const IndexPage = (props) => {
  // 1. Manejo de estados.
  const {} = props;
  const navigate = useNavigate();

  // 2. Ciclo de vida.
  useEffect(() => {}, []);

  // 3. Metodos.

  const [modal, setModal] = useState(false);
  const abrirCerrarModal = () => {
    setModal(!modal);
  };


  const styles = useStyles();
  const body = (
    <div className="modalIndex">
      <div className="modalIndex_contenido">
        <div className="modalIndex_titulos">
          <h2>¿Quienes somos?</h2>
        </div>

        <div className="modal_info">
          <h1>Adminify® es una empresa que permite satisfacer las necesidades de gestion de inventario de tu negocio, permitiendo la creación, actualización y eliminación de productos del inventario, junto con un uso de contexto en relación al stock del inventario con el sistema de caja. Adicional a todo, Adminify ofrece una interfaz moderna capaz de ser intuitiva, rápida y adaptada para ser usada por todas las edades.</h1>
        </div>
        <div className="modal_botonesIndex">
          <IconButton aria-label="GitHub" size="small">
                <FaGithub fontSize="inherit" />
          </IconButton>
          <Button variant="outlined" onClick={() => abrirCerrarModal()}>
            cerrar
          </Button>
        </div>
      </div>
    </div>
  );

  // 4. Render.
  return (
    <section className="indexPage_contenedor">
      <div className="indexPage_contenido">
        <div className="indexPage_titlecontent">
        <h1>Adminify®</h1>
          <h2><FaBoxOpen size="35vh" ></FaBoxOpen></h2>
        </div>
        <div className="indexPage_contenedorBotones">
          <Button variant="contained" onClick={() => navigate("/login")}>
          Entrar <FaSignInAlt size="3vh" position></FaSignInAlt>
        </Button>
        <Button variant="contained" onClick={() => abrirCerrarModal()}>
        <FaInfoCircle size="3vh" position></FaInfoCircle> Sobre nosotros
        </Button>
        </div>
        <Modal open={modal} onClose={abrirCerrarModal}>
        {body}
      </Modal>
      </div>
    </section>
  );
};

// PropTypes.
IndexPage.propTypes = {};

// Exportación.
export default IndexPage;
