using Microservice.Context;
using Microservice.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Microservice.Controllers;

public class LogController : BaseApiController
{
    private readonly DataContext _context;

    public LogController(DataContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<List<Log>>> Get()
    {
        return await _context.Logs.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Log>> GetLog(Guid id)
    {
        return await _context.Logs.FindAsync(id);
    }
}
