using Microservice.Context;
using Microsoft.EntityFrameworkCore;

namespace Microservice;

public class Config
{
    public static async Task ConfigApp(WebApplication host)
    {
        using var scope = host.Services.CreateScope();
        var services = scope.ServiceProvider;

        try
        {
            var dbContext = services.GetRequiredService<DataContext>();
            await dbContext.Database.MigrateAsync();
            await Seed.SeedData(dbContext);
        }
        catch (Exception ex)
        {
            // var logger = services.GetRequiredService<ILogger<Config>>();
            // logger.LogError(ex, "An error occured during migrations");
            // log something error
            throw ex;
        }
    }
}
