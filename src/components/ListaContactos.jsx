import TarjetaContacto from './TarjetaContacto';
import './ListaContactos.css';

function ListaContactos({ contactos, soloActivos = false }) {
  const contactosFiltrados = soloActivos
    ? contactos.filter((contacto) => contacto.activo)
    : contactos;

  return (
    <div className="lista-contactos">
      {contactosFiltrados.length > 0 ? (
        contactosFiltrados.map((contacto) => (
          <TarjetaContacto
            key={contacto.id}
            {...contacto}
          />
        ))
      ) : (
        <p>No hay contactos para mostrar.</p>
      )}
    </div>
  );
}

export default ListaContactos;
