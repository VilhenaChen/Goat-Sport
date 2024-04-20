using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using Microsoft.AspNetCore.Authorization;
using GoatCoachAPI.ViewModels;

namespace GoatCoachAPI.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    [ApiController]
    public class SportsController : ControllerBase
    {
        private readonly DataContext _context;

        public SportsController(DataContext context)
        {
            _context = context;
        }

        // GET: /Sports
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SportVM>>> GetSports()
        {
            return await _context.Sports
             .Select(s => new SportVM
             {
                 Id = s.Id,
                 Name = s.Name
             })
             .ToListAsync();
        }

        // GET: /Sports/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sport>> GetSport(int id)
        {
            var sport = await _context.Sports.FindAsync(id);

            if (sport == null)
            {
                return NotFound();
            }

            return sport;
        }
    }
}
