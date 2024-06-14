// Home.jsx
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "../assets/style.css"

const Home = () => {
  return (
    <Box className="home-container" p={4}>
    <Box className="welcome-content">
      <Heading as="h1" size="xl" mb={4}>
        Bienvenido
      </Heading>
      <Text fontSize="xl">
        ¡Hola! Gracias por usar nuestra aplicación de lista de tareas. Aquí puedes organizar tus pendientes,
        establecer prioridades y mantenerte al día con tus objetivos. ¡Esperamos que disfrutes de la experiencia!
      </Text>
    </Box>
  </Box>
  );
};

export default Home;
