using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microservice.Models;
using Microsoft.EntityFrameworkCore;

namespace Microservice.Context;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions options) : base(options)
    {

    }

    public DbSet<Log> Logs { get; set; }
}