import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import "../assets/style.css";

const About = () => {
  return (
    <Box className="about-container">
      <Box className="about-card">
        <Heading as="h1" size="xl" mb={4}>
          ¡Hola! Esta aplicación te ayudará a tener tu día a día más ordenado
        </Heading>
        <Text fontSize="xl">
          Bienvenido a Task Tracker, tu compañero diario para organizar tus tareas y mejorar tu productividad. Nuestra aplicación está diseñada para facilitar la gestión de tus actividades diarias de manera eficiente y sencilla.
        </Text>
        <Text fontSize="xl" mt={4}>
          Con Task Tracker, puedes:
        </Text>
        <UnorderedList fontSize="xl" mt={2}>
          <ListItem>Crear y organizar tareas fácilmente.</ListItem>
          <ListItem>Establecer prioridades para tus tareas.</ListItem>
          <ListItem>Registrar el progreso y completar tareas.</ListItem>
          <ListItem>Visualizar estadísticas sobre tu productividad.</ListItem>
        </UnorderedList>
        <Text fontSize="xl" mt={4}>
          Nuestro objetivo es proporcionarte una herramienta intuitiva que se adapte a tus necesidades y te ayude a alcanzar tus metas de manera más efectiva. Ya sea que estés estudiando, trabajando o llevando a cabo proyectos personales, Task Tracker está aquí para simplificar tu vida diaria.
        </Text>
        <Text fontSize="xl" mt={4}>
          ¡Comienza hoy mismo y lleva tu productividad al siguiente nivel con Task Tracker!
        </Text>
      </Box>
    </Box>
  );
};

export default About;
