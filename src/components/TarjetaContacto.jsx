import './TarjetaContacto.css';

function TarjetaContacto({ nombre, email, telefono, activo, avatar }) {
  return (
    <div className={`tarjeta-contacto ${activo ? 'activo' : 'inactivo'}`}>
      <img src={avatar} alt={`Avatar de ${nombre}`} className="avatar" />
      <h3>{nombre}</h3>
      <p>Email: {email}</p>
      <p>Teléfono: {telefono}</p>
      <p>Estado: {activo ? '🟢 Activo' : '🔴 Inactivo'}</p>
    </div>
  );
}

export default TarjetaContacto;