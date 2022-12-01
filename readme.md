# K_Solution Enterprise Management System

## Technologies

- NET 7.0
- Entity Framework Core 7.0
- Microsoft.AspNetCore.Identity
- Bootstrap 4.x

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

## Command inneed

- dotnet add package Newtonsoft.Json --version 13.0.1
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
- dotnet add package ClosedXML --version 0.97.0

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
