
# Requisitos del Sistema – EmpleoU

## 1. Descripción del proyecto

EmpleoU es una plataforma de bolsa de empleo y prácticas universitarias que permite conectar estudiantes y egresados con oportunidades laborales publicadas por la oficina de egresados.

El sistema permitirá buscar vacantes mediante filtros, gestionar postulaciones y consultar su estado.

## 2. Objetivo general

Diseñar e implementar una arquitectura de software que permita gestionar oportunidades laborales universitarias, priorizando el rendimiento de las búsquedas, la seguridad de los datos personales, la disponibilidad y la escalabilidad del sistema.

## 3. Actores del sistema

- **Estudiante o egresado:** busca vacantes y realiza postulaciones.
- **Representante de empresa:** consulta las postulaciones recibidas y modifica su estado.
- **Oficina de egresados:** publica y administra las vacantes laborales.

## 4. Requisitos funcionales

Los requisitos funcionales describen las acciones que debe realizar el sistema.

### RF-01. Publicación de vacantes
El sistema debe permitir a la oficina de egresados publicar vacantes laborales y prácticas universitarias.

### RF-02. Búsqueda de vacantes
El sistema debe permitir buscar vacantes aplicando filtros por área, ciudad, modalidad y salario.

### RF-03. Registro de postulaciones
El sistema debe permitir que estudiantes y egresados se postulen a las vacantes disponibles.

### RF-04. Consulta de postulaciones
El sistema debe permitir a los representantes de empresas consultar las postulaciones recibidas.

### RF-05. Actualización del estado
El sistema debe permitir cambiar el estado de una postulación, por ejemplo, recibida, en revisión, aceptada o rechazada.

## 5. Requisitos no funcionales

Los requisitos no funcionales establecen las condiciones de calidad que debe cumplir el sistema.

Los siguientes valores son objetivos propuestos para el diseño y están pendientes de validación mediante pruebas.

### RNF-01. Disponibilidad
El sistema deberá alcanzar una disponibilidad mensual mínima del 99,5 %, equivalente aproximadamente a un máximo de 3 horas y 36 minutos de indisponibilidad en un mes de 30 días.

### RNF-02. Rendimiento
El 95 % de las búsquedas de vacantes deberá responder en menos de 500 milisegundos, con 100 usuarios concurrentes.

### RNF-03. Escalabilidad
La arquitectura deberá permitir duplicar la capacidad inicial mediante la incorporación de nuevas instancias de la API.

### RNF-04. Seguridad
El sistema deberá implementar autenticación y control de acceso según el rol del usuario. Las hojas de vida y los datos personales deberán estar protegidos frente a accesos no autorizados.

### RNF-05. Recuperación
Se propone un tiempo máximo de recuperación (RTO) de 60 minutos y una pérdida máxima aceptable de datos (RPO) de 15 minutos.

### RNF-06. Observabilidad
La arquitectura deberá permitir identificar fallos del servicio en un tiempo máximo objetivo de 5 minutos mediante métricas, monitoreo y alertas.

### RNF-07. Costos
Se propone como objetivo inicial un costo mensual máximo de USD 30 para un entorno básico, sujeto a la estimación y validación de los recursos necesarios.

## 6. Consideraciones arquitectónicas iniciales

De acuerdo con los diagramas C4 existentes, EmpleoU contempla:

- Una aplicación web para la interacción con los usuarios.
- Una API REST para procesar las operaciones del sistema.
- PostgreSQL para almacenar usuarios, vacantes y postulaciones.
- Almacenamiento privado para hojas de vida.
- Un servicio externo de correo electrónico para notificaciones.

Como parte de la evolución del proyecto se evaluará la incorporación de Docker, Redis, Nginx, Prometheus y Grafana, conforme a los requisitos establecidos por el profesor.

## 7. Estado del documento

Este documento constituye una propuesta inicial de requisitos para EmpleoU.

Los requisitos funcionales se basan en el alcance mínimo establecido para el proyecto. Los valores de los requisitos no funcionales deben ser revisados por el equipo y comprobados posteriormente mediante pruebas técnicas.
