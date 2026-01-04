![Portada](./assets/PORTADA.png)

# Práctica 05 – Persistencia y Repositorios con TypeORM y PostgreSQL en NestJS

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" width="110">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" width="95">
</div>

---

## Autor

Cinthya Ramón  
Correo institucional: cramonm1@est.ups.edu.ec  
GitHub: https://github.com/CinthyLu

---

## 1. Introducción

En esta sección se valida el funcionamiento de la API REST utilizando persistencia real con PostgreSQL.  
Los endpoints permiten realizar operaciones CRUD completas sobre la entidad Product, conectándose a la base de datos mediante TypeORM.

---

## 2. Endpoints implementados

La API expone los siguientes endpoints REST:

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- PATCH /api/products/:id
- DELETE /api/products/:id

Cada endpoint delega la lógica al servicio correspondiente.

---

## 3. Pruebas de la API

Las pruebas se realizaron utilizando herramientas como Postman, Bruno o Thunder Client.

Evidencia de consumo de endpoints:

![Pruebas API REST](assets/03_configuracion_01.png)
