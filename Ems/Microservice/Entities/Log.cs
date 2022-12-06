using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Microservice.Models;

public class Log
{
    public Guid Id { get; set; }
    public string ActionName { get; set; } = "";
    public string DateTime { get; set; } = "";
    public string Category { get; set; } = "";
    public string UserName { get; set; } = "";
    public string Input { get; set; } = "";
    public string Output { get; set; } = "";
    public Guid State { get; set; }
}