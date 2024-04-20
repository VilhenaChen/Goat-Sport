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
using GoatCoachAPI.Contracts;

namespace GoatCoachAPI.Controllers
{
    [Authorize]
    [Route("[controller]/[action]")]
    [ApiController]
    public class SportsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly ISportRepository sportRepository;

        public SportsController(DataContext context, ISportRepository _sportRepository)
        {
            _context = context;
            sportRepository = _sportRepository;
        }

        // GET: /Sports
        [HttpGet]
        public async Task<ActionResult<List<GetSportsVM>>> GetSports()
        {
            var sports = await sportRepository.GetAllAsync();

            return sports.Select(s => new GetSportsVM
             {
                 Id = s.Id,
                 Name = s.Name
             })
             .ToList();
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
