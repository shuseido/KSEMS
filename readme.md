# K_Solution Enterprise Management System

## Technologies

- React/TypeScript for front end
- UI: AntDesign
- NET7.0 for backend
- Entity Framework Core 7.0
- Microsoft.AspNetCore.Identity
- Axios API

## Why React

- Net Core and React is top most loved by web developer. Facebook use it (they make it), Netflix use it, Instagram use it
- Easy to learn. Because it just a library, not a framework. So we dont need to know something like packages and state management system
- Run very fast. Because React use a virtual DOM that contains a representation of actual DOM that browser used. So any state change we make in our application will not cause the actual DOM to be repainted. React is smart enough to just update the part of the DOM that need updating and maintains a representation of the DOM in memory (While if we use JQuery, jquery will update the whole DOM directly)
- It's small, and it just JavaScript. TypeScript is just some features that we need to learn

## Why TypeScript

- Strong typing,
- Object oriented,
- Better intellisense,
- Access modifiers,
- Caching silly mistakes in develop
- Future JS features,
- Easy to learn
- Much imporve react application...

## React Component

- A normal web application use alot of pagesuse: one or many HTML files, 1 or many js files and one or many Css files
- A normal react application use only one page (single page).
- Each page of react application should be built over a number of components. And each components should contained things that contains the code to render HTML. Make it very portable
- Each component can have it own State. And state of this component (what it's tracking) can be passed down as properties (Props)
- We can also pass down functions from parent components to child component that affect states of parent components

## Install Tools

- VSCode
- .NET Core SDK 7.0 : https://dotnet.microsoft.com/en-us/download/dotnet/7.0
- PostgresSQL, MySQL
- Extenstions: Prettier, C#, Git

## References DI

- Ems
  1. IdentityServer
  1. Microservice
  1. Admin, Backups, Base, Scheduler
  1. web-client
- IdentityServer
- Microservice
  1. Admin, Backups, Base, Scheduler

## Command to create solution structure

- dotnet new sln (for create solution file)
- dotnet new webapi -n IdentityServer -f net7.0
- dotnet new webapi -n Microservice -f net7.0
- dotnet new classlib -n [Admin, Backups, Base, Scheduler] -f net7.0
- (at Ems folder) dotnet sln add [Admin, Backups, Base, Microservice, Scheduler]
- (at Ems/Microservice) dotnet add reference ../[Admin, Backups, Base]
- npx create-react-app web-client --use-npm --template typescript
- npm install axios

## Command to run project

- (at Ems/IdentityServer folder) dotnet run/watch run (then test it at: localhost:5000/swagger)
- (at Ems/Microservice folder) dotnet run/watch run (then test it at: localhost:5001/swagger)
- (at Ems/web-client folder) npm start (then test it at: localhost:3000)
- if error start npm (when node_module folder not exists) run npm install

## Command to install package needed

- (at Ems/web-client folder) npm install antd
- (at Ems/web-client folder) npm install --save @ant-design/icons

## scaffold database models

## migrate database & seed

- dotnet tool install --global dotnet-ef
- dotnet ef migrations add <init>
- dotnet ef database update
