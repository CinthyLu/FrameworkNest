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

En esta sección se describe la estructura del proyecto NestJS luego de integrar persistencia real mediante TypeORM y PostgreSQL.  
La aplicación mantiene una arquitectura modular por dominios, separando claramente responsabilidades entre controladores, servicios, entidades y repositorios, siguiendo buenas prácticas de desarrollo backend.

---

## 2. Organización general del proyecto

El proyecto se estructura por dominios funcionales, lo que permite escalabilidad, mantenimiento y reutilización del código.

Estructura principal del proyecto:

- config  
- core  
- users  
- products  
- auth  

Cada dominio representa un módulo independiente dentro de la aplicación.

---

## 3. Estructura interna de un módulo de dominio

Cada módulo de dominio sigue una estructura organizada que separa responsabilidades:

- controllers  
- services  
- dtos  
- entities  
- mappers  

Esta organización permite aplicar el patrón MVCS utilizado por NestJS.

---

## 4. Estructura del módulo Products

El módulo products es el dominio trabajado en esta práctica e incluye persistencia real con PostgreSQL.

Estructura del módulo:

- products.controller.ts  
- products.service.ts  
- product.entity.ts  
- DTOs de creación y actualización  
- Mapper de dominio  

Este módulo se conecta a la base de datos mediante un repositorio de TypeORM.

---

## 5. Registro del módulo en la aplicación

El módulo products se registra en el módulo principal de la aplicación, permitiendo que NestJS gestione sus dependencias y ciclo de vida.

El registro del módulo asegura:

- Inyección correcta de servicios
- Acceso al repositorio correspondiente
- Integración con el resto de la aplicación

---

## 6. Evidencia de la estructura del proyecto

A continuación se muestra la estructura del proyecto organizada por módulos y carpetas:

![Estructura del proyecto](assets/01_configuracion_01.png)
