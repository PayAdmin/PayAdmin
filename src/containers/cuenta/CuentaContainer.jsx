// Dependencias.
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { Component } from "react";

// Importación de componentes.
import CuentaPage from "../../pages/cuenta/CuentaPage.jsx";

// Definición del contenedor.
class CuentaContainer extends Component {
  // -- Constructor.
  constructor(props) {
    super(props);

    this.state = {};
  }

  // -- Ciclo de vida del componente.
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  // -- Métodos.
  // -- Métodos [REDIRECT].
  // -- Métodos [HANDLER].
  // -- Métodos [MAPPING].

  // -- Render
  render() {
    const { userData } = this.props;
    return <CuentaPage userInfo={userData} />;
  }
}

// PropTypes.
CuentaContainer.propTypes = {
  userData: PropTypes.object.isRequired,
};

// Redux
const mapStateToProps = (state) => ({
  userData: state.user.userData ?? {},
});

const mapDispatchToProps = {};

// Exportación del contenedor.
export default connect(mapStateToProps, mapDispatchToProps)(CuentaContainer);

//? mapStateToProps: Consulta el estado de redux y lo mapea a los props del componente.
