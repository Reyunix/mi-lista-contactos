import { useState } from 'react';
import ListaContactos from './components/ListaContactos';
import './App.css';

const contactos = [
  {
    id: 1,
    nombre: "Ana García",
    email: "ana@email.com",
    telefono: "+34 123 456 789",
    activo: true,
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    nombre: "Carlos López",
    email: "carlos@email.com",
    telefono: "+34 987 654 321",
    activo: false,
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    nombre: "María Silva",
    email: "maria@email.com",
    telefono: "+34 555 123 456",
    activo: true,
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    nombre: "Juan Pérez",
    email: "juan@email.com",
    telefono: "+34 666 789 123",
    activo: true,
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    id: 5,
    nombre: "Laura Martín",
    email: "laura@email.com",
    telefono: "+34 777 888 999",
    activo: false,
    avatar: "https://i.pravatar.cc/150?img=5"
  }
];

function App() {
  const [soloActivos, setSoloActivos] = useState(false);

  const total = contactos.length;
  const activos = contactos.filter(c => c.activo).length;

  return (
    <div className="App">
      <h1>📇 Lista de Contactos</h1>
      <p>Total: {total} | Activos: {activos}</p>
      <label>
        <input
          type="checkbox"
          checked={soloActivos}
          onChange={() => setSoloActivos(!soloActivos)}
        />
        Mostrar solo activos
      </label>
      <ListaContactos contactos={contactos} soloActivos={soloActivos} />
    </div>
  );
}

export default App;
