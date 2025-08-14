
O projeto NestBuy segue uma estrutura mono-repo organizada por domínios e responsabilidades, facilitando o desenvolvimento, deploy e manutenção. Abaixo está a documentação detalhada de cada diretório:

## Estrutura Expandida e Melhorada

NestBuy/
├── apps/                   # Aplicações principais
│   ├── frontend-nextjs/    # Frontend em Next.js
│   ├── backend-nestjs/     # Microserviço principal (NestJS)
│   ├── backend-laravel/    # Painel admin (Laravel)
│   └── shared/             # Código compartilhado entre apps
├── docker/                 # Configurações Docker
│   ├── nginx/              # Configurações do proxy reverso
│   ├── mongo/              # Configuração MongoDB
│   ├── postgres/           # Configuração PostgreSQL
│   └── redis/              # Novo: Configuração Redis para cache
├── scripts/                # Scripts utilitários
├── libs/                   # Novo: Bibliotecas compartilhadas
│   ├── types/              # Tipos TypeScript compartilhados
│   └── utils/              # Utilitários comuns
├── .github/                # Configurações CI/CD
│   ├── workflows/          # Fluxos de trabalho GitHub Actions
│   └── ISSUE_TEMPLATE/     # Templates para issues
├── docs/                   # Novo: Documentação do projeto
│   ├── api/                # Documentação de APIs
│   ├── db/                 # Documentação do banco de dados
│   └── architecture.md     # Visão arquitetural
├── configs/                # Novo: Configurações centralizadas
│   ├── env/                # Variáveis de ambiente
│   └── eslint/             # Configurações de lint
├── docker-compose.yml      # Orquestração de containers
├── package.json            # Gerenciamento mono-repo
└── README.md               # Documentação principal

## Detalhamento dos Diretórios

### 1. `apps/` - Aplicações Principais

**frontend-nextjs/**

- Next.js 15 com App Router
    
- Estrutura interna:
    
    text
    
    frontend-nextjs/
    ├── components/     # Componentes reutilizáveis
    ├── pages/          # Rotas da aplicação
    ├── styles/         # Estilos globais e módulos SCSS
    ├── services/       # Clientes API
    ├── contexts/       # Gerenciamento de estado
    ├── public/         # Assets estáticos
    └── tests/          # Testes do frontend
    

**backend-nestjs/**

- NestJS com arquitetura modular
    
- Estrutura interna:
    
    text
    
    backend-nestjs/
    ├── src/
    │   ├── modules/    # Módulos organizados por domínio
    │   ├── core/       # Configurações globais
    │   ├── shared/     # Utilitários compartilhados
    │   └── main.ts     # Ponto de entrada
    ├── test/           # Testes do backend
    └── Dockerfile      # Configuração de deploy
    

**backend-laravel/**

- Laravel 10 para painel administrativo
    
- Estrutura interna:
    
    text
    
    backend-laravel/
    ├── app/
    │   ├── Models/     # Eloquent models
    │   ├── Http/       # Controllers
    │   └── ...         # Estrutura padrão Laravel
    ├── resources/
    │   ├── views/      # Blade templates
    │   └── js/         # Assets JavaScript
    └── Dockerfile      # Configuração de deploy
    

**shared/**

- Código compartilhado entre frontend e backends
    
- Inclui:
    
    - Tipos TypeScript comuns
        
    - Validações compartilhadas
        
    - Constantes do projeto
        

### 2. `docker/` - Configurações de Infraestrutura

**nginx/**

- Configurações de proxy reverso
    
- Arquivos:
    
    - `nginx.conf` (configuração principal)
        
    - `ssl/` (certificados HTTPS)
        

**mongo/**

- Configuração personalizada do MongoDB
    
- Inclui scripts de inicialização
    

**postgres/**

- Configuração do PostgreSQL com:
    
    - `init.sql` (schema inicial)
        
    - Configurações de performance
        

**redis/**

- Configuração do Redis para:
    
    - Cache
        
    - Sessões
        
    - Filas
        

### 3. `scripts/` - Utilitários

- `db-migrate.sh` - Executor de migrações
    
- `seed-db.sh` - População inicial do banco
    
- `codegen.sh` - Gerador de código (GraphQL, types)
    
- `deploy/` - Scripts de deploy específicos por ambiente
    

### 4. `libs/` - Bibliotecas Compartilhadas

**types/**

- Tipos TypeScript compartilhados
    
- Exemplo: `Product.ts` - Interface do produto usada no front e back
    

**utils/**

- Funções utilitárias compartilhadas
    
- Exemplos:
    
    - `currency.ts` - Formatação monetária
        
    - `validation.ts` - Validações comuns
        

### 5. `.github/` - CI/CD e Gestão

**workflows/**

- `ci.yml` - Integração contínua
    
- `deploy-prod.yml` - Deploy em produção
    
- `deploy-staging.yml` - Deploy em staging
    

**ISSUE_TEMPLATE/**

- Templates padronizados para:
    
    - Bug reports
        
    - Feature requests
        
    - Pull requests
        

### 6. `docs/` - Documentação

**api/**

- Especificações OpenAPI/Swagger
    
- Documentação de endpoints
    
- Exemplos de requests/responses
    

**db/**

- Modelo ERD completo
    
- Dicionário de dados
    
- Políticas de backup
    

### 7. `configs/` - Configurações Centralizadas

**env/**

- `.env.example` - Template de variáveis
    
- Configurações por ambiente (dev, staging, prod)
    

**eslint/**

- Configurações de lint compartilhadas
    
- Plugins para:
    
    - TypeScript
        
    - React
        
    - Node.js
        

## Arquivos Raiz

**docker-compose.yml**

- Define todos os serviços:
    
    - Frontend (Next.js)
        
    - Backends (NestJS, Laravel)
        
    - Bancos de dados (PostgreSQL, MongoDB, Redis)
        
    - Proxy (Nginx)
        

**README.md**

- Visão geral do projeto
    
- Guia de instalação
    
- Links importantes
    
- Badges de CI/license
    

## Fluxo de Desenvolvimento Recomendado

1. **Setup inicial**:
    
    bash
    
    git clone <repo>
    cp configs/env/.env.example .env
    docker-compose up -d
    
2. **Desenvolvimento**:
    
    - Frontend: `apps/frontend-nextjs`
        
    - Backend: `apps/backend-nestjs`
        
    - Admin: `apps/backend-laravel`
        
3. **Testes**:
    
    ./scripts/run-tests.sh
    
4. **Deploy**:
    
    - Automático via GitHub Actions
        
    - Manual com `./scripts/deploy/prod.sh`