
import React from 'react';

import TaskList from './components/TaskList';
import NavBrowser from './components/NavBrowser';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";

function App() {
  const tasks = [
    {
      name: "Podar los arbustos del jardín",
      fecha: "2023-11-20T11:30:00.000+00:00",
      description: "Mantener el jardín limpio y ordenado podando los arbustos.",
      estado: true
    },
    {
      name: "Regar las plantas",
      fecha: "2023-11-21T15:00:00.000+00:00",
      description: "Asegurarse de que todas las plantas reciban la cantidad adecuada de agua.",
      estado: false
    },
    {
      name: "Plantar nuevas flores",
      fecha: "2023-11-22T10:00:00.000+00:00",
      description: "Agregar color al jardín plantando flores frescas.",
      estado: false
    },
    {
      name: "Otra tarea",
      fecha: "2023-11-23T14:30:00.000+00:00",
      description: "Descripción de otra tarea.",
      estado: true
    },
  ];

  return (
    <>
      <Router>
      <NavBrowser />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasklist" element={<TaskList tasks={tasks} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
