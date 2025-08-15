NestBuy - Fullstack E-commerce

# Overview

E-commerce project with:

Frontend: Next.js (TypeScript + SCSS)
Backend: NestJS (Main API) + Laravel (Admin Panel)
Database: PostgreSQL (relational) + MongoDB (logs/reviews)

# Getting Started

Prerequisites
Docker + Docker Compose
Node.js 18+
PHP 8.2+
PostgreSQL and MongoDB (or via Docker)

# Clone the repository:
   
   ```bash
   git clone https://github.com/seu-usuario/NestBuy.git
   cd NestBuy
   ```

Configure the environment variables (see configs/env/.env.example).
Start the containers:

    ```bash
    docker-compose up -d
    ```

# Project Structure

        ```bash
    ├── apps/
    ├── shared/
    ├── docker/
    ├── scripts/
    ├── libs/
    ├── .github/
    ├── docs
    └── configs/
        ```
# Technologies

Frontend: Next.js, React, Redux Toolkit, TailwindCSS
Backend: NestJS, Laravel, JWT, Stripe/Mercado Pago
Databases: PostgreSQL, MongoDB, Redis
Infrastructure: Docker, GitHub Actions, Vercel/AWS