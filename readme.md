# K_Solution Enterprise Management System

## Technologies

- React + TypeScript for front end
- NET 7.0 for backend
- Entity Framework Core 7.0
- Microsoft.AspNetCore.Identity

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
- Silly mistakes in develop
- Future JS features,
- Easy to learn
- Much imporve react application...

## React Component

- A normal web application use alot of pagesuse: one or many HTML files, 1 or many js files and one or many Css files
- A normal react application use only one page (single page).
- Each page of react application should be built over a number of components. And each components should contained things that contains the code to render HTML. Make it very portable
- Each component can have it own State. And state of this component (what it's tracking) can be passed down as properties (Props)
- We can also pass down functions from parent components to child component that affect states of parent components

## React Hooks

- import React, { useState(), useEffect() }

## Install Tools

- VSCode
- .NET Core SDK 7.0 : https://dotnet.microsoft.com/en-us/download/dotnet/7.0
- PostgresSQL, MySQL
- Extenstions: Prettier, C#, Git

## References DI

- Ems
  1. Api
  1. Application
  1. Domain
  1. Persistence
- Api
  1. Application
- Application
  1. Persistence
  1. Domain
- Persistence
  1. Domain

## Command to create solution structure

- dotnet new sln -f net7.0 (for create solution file)
- dotnet new webapi -n Api -f net7.0
- dotnet new classlib -n [Application, Domain, Persistence] -f net7.0
- dotnet sln add [Api, Application, Domain, Persistence]
- npx create-react-app web-react --use-npm --template typescript

## Command to run project

- (at Ems/Api folder) dotnet run/watch run (then test it at: localhost:5000/swagger)
- (at web-react folder) npm start (then test it at: localhost:3000)

## Command to install package needed

<!-- - dotnet add package Newtonsoft.Json --version 13.0.1
- dotnet add package Swashbuckle.AspNetCore -v 6.4.0
- dotnet add package Microsoft.EntityFrameworkCore.Design --version 6.0.9
- dotnet add package Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore --version 6.0.9
- dotnet add package Microsoft.AspNetCore.Mvc.Razor.RuntimeCompilation --version 6.0.9
- dotnet add package Microsoft.AspNetCore.Identity.EntityFrameworkCore --version 6.0.9
- dotnet add package Microsoft.EntityFrameworkCore.SqlServer --version 6.0.9
- dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL --version 6.0.9
- dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer --version 6.0.9
- dotnet add package FluentValidation.AspNetCore --version 11.2.2
- dotnet add package SSH.NET --version 2020.0.2
- dotnet add package Autofac.Extensions.DependencyInjection --version 8.0.0
- dotnet add package ClosedXML --version 0.97.0 -->

## scaffold database models

- dotnet ef dbcontext scaffold "Server=.\SQLEXPRESS;Database=CurationTool;Trusted_Connection=True;" Microsoft.EntityFrameworkCore.SqlServer -o GenModel
- dotnet ef dbcontext scaffold "Server=192.168.12.95;Database=curationdb;Port=5432;User Id=admin;Password=adks@2112qty;" Npgsql.EntityFrameworkCore.PostgreSQL -o GenModel
- dotnet ef dbcontext scaffold "Server=192.168.12.95;Database=curationdb;Port=5432;User Id=admin;Password=adks@2112qty;" Npgsql.EntityFrameworkCore.PostgreSQL -o GenModel -t "table_name"

## migrate database & seed

- dotnet tool install --global dotnet-ef
- dotnet ef migrations add <init>
- dotnet ef database update

## How to config and run

- Change connection string of database in appsetting.json
- Run mirage database by command: dotnet ef database update add-identity-sql (or add-identity-postgres)
- Choose profile to run or press F5

## How to contribute

- Fork and create your branch
- Create Pull request to us.

## Admin Dashboard Template

- Gull:

## I18N (Internalization)
