<h1 align="center">
  <img alt="project logo" src="https://teddydigital.io/wp-content/uploads/2023/02/Ativo-13-8.png" width="224px"/><br/>
  Teste Teddy Fullstack 
</h1>
<p align="center">
    Um projeto desenvolvido como parte do teste técnico para Desenvolvedor Full Stack Jr na Teddy Open Finance. Este é o backend do sistema de gestão de clientes, construído com <b>NestJS</b>, <b>PostgreSQL</b> e documentada com <b>Swagger</b>. O projeto inclui <b>API completa para CRUD de clientes</b>, <b>Sistema de autenticação simplificado</b>, <b>Validação de dados com class-validator</b> e Documentação interativa com Swagger.
    <br/>
    <br/>
    Feito focando em um código <b>moderno</b>, <b>eficiente</b> e <b>estruturado</b>, com foco em usabilidade, qualidade e facilidade de manutenção.
</p>

<hr>

<div align="center">

## 🚀 Sobre o Projeto

O backend deste sistema é uma **API RESTful para gestão de clientes**, desenvolvida como parte de um teste técnico para a posição de Desenvolvedor Full Stack Jr. Ele oferece funcionalidades como:

- CRUD completo de clientes (criar, listar, editar e excluir);
- Sistema de autenticação para proteção dos endpoints;
- Validação robusta de dados com class-validator;
- Documentação interativa com Swagger;
- Containerização com Docker para fácil implantação;
- Persistência de dados com PostgreSQL.

Este projeto foi desenvolvido seguindo as melhores práticas de arquitetura de software, proporcionando uma solução escalável e de fácil manutenção. Vários aspectos foram cuidadosamente implementados para garantir um sistema confiável e de alta qualidade.

A organização do código segue princípios de arquitetura limpa, com módulos bem definidos e responsabilidades claramente separadas. Utilizei práticas como:

- Injeção de dependências;
- Padrão Repository para acesso a dados;
- DTOs para transferência segura de informações;
- Tratamento centralizado de exceções;
- Princípios SOLID para código sustentável.

<br />

## 🛠️ Tecnologias Utilizadas

- **NestJS** - Framework Node.js para construção de aplicações server-side eficientes e escaláveis
- **TypeScript** - Linguagem de programação tipada
- **PostgreSQL** - Sistema de banco de dados relacional
- **TypeORM** - ORM para TypeScript e JavaScript
- **Swagger/OpenAPI** - Documentação de API
- **Docker** - Containerização da aplicação

# ⚙️ Como Instalar

## Configuração do Ambiente

No diretório backend, copie o arquivo de exemplo:

```sh
cp .env.example .env
```

Edite o arquivo `.env` e insira as configurações do banco de dados:

```sh
POSTGRES_HOST=db
POSTGRES_PORT=5432
POSTGRES_USER=root123
POSTGRES_PASSWORD=root123
POSTGRES_DB=postgres
POSTGRES_SYNCHRONIZE=true
POSTGRES_AUTO_LOAD_ENTITIES=true
```

## Executando o Backend com Docker

Para iniciar o backend utilizando Docker, execute o seguinte comando na raiz do projeto:

```sh
docker compose up
```

<br />

# 🖥️ Utilizando o sistema

Depois de instalar e iniciar o projeto, você pode acessar a API através do navegador no endereço [http://localhost:3000/api](http://localhost:3000/api).

Funcionalidades disponíveis:

- **Autenticação de Usuário**: Sistema protegido que requer autenticação para acessar os endpoints restritos.
- **Gerenciamento de Clientes**: CRUD completo para adicionar, modificar, remover e consultar informações dos clientes cadastrados.
- **Documentação Interativa**: A API está documentada utilizando Swagger para facilitar o uso e a exploração dos endpoints.
- **Banco de Dados Persistente**: Conectado ao PostgreSQL para garantir a integridade e permanência dos dados.

# 📚 Outros detalhes...

- **Arquitetura e Estruturação**:
   - O projeto segue o padrão **modular do NestJS**, garantindo separação de responsabilidades e fácil manutenção.
   - Implementação de **princípios SOLID** para um código sustentável e escalável.
   - **DTOs (Data Transfer Objects)** são usados para garantir validação e padronização dos dados.

- **Validação e Segurança**:
   - Uso do **class-validator** para validação de dados nos endpoints.
   - Tratamento centralizado de erros para uma API mais robusta.

- **Eficiência e Otimização**:
   - Utilização de **Docker** para facilitar a implantação e configuração do ambiente.
   - **Swagger/OpenAPI** integrado para documentação e testes interativos dos endpoints.
   - **TypeORM** utilizado para abstração e otimização do acesso ao banco de dados.

Essas características garantem que o projeto seja escalável, seguro e de fácil manutenção.


