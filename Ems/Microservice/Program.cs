using Microservice;
using Microservice.Context;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var services = builder.Services;
var configuration = builder.Configuration; // allows both to access and to set up the config
var environment = builder.Environment;

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Add a CORS policy service to able call  and get response API in web-client at localhost:3000
services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        // policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
        policy.AllowAnyOrigin();
    });
});

// Add dbcontext
services.AddDbContext<DataContext>(opt =>
{
    opt.UseSqlite(configuration.GetConnectionString("DefaultConnection"));
});

var app = builder.Build();

// config
await Config.ConfigApp(app);

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// app.UseHttpsRedirection();   //we dont use https
// now we make app to use the Cors Service we add above by this
app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
