using Microservice.Common;
using Microservice.Models;

namespace Microservice.Context;
public class Seed
{
    public static async Task SeedData(DataContext context)
    {
        var dtFormat = Consts.DB_DATETIME_FORMAT;

        if (context.Logs.Any())
            return;

        var logs = new List<Log>
        {
            new Log
            {
                Id = Guid.NewGuid(),
                ActionName = "Init Database",
                Category = "DbContext",
                DateTime = DateTime.Now.ToString(dtFormat),
                UserName = "super",
                Input = "",
                Output = "",
                State = Guid.NewGuid(),
            },
            new Log
            {
                Id = Guid.NewGuid(),
                ActionName = "Init Identity Database",
                Category = "DbContext",
                DateTime = DateTime.Now.ToString(dtFormat),
                UserName = "super",
                Input = "",
                Output = "",
                State = Guid.NewGuid(),
            },
            new Log
            {
                Id = Guid.NewGuid(),
                ActionName = "Seed Database",
                Category = "DbContext",
                DateTime = DateTime.Now.ToString(dtFormat),
                UserName = "super",
                Input = "",
                Output = "",
                State = Guid.NewGuid()
            }
        };

        await context.Logs.AddRangeAsync(logs);
        await context.SaveChangesAsync();
    }
}