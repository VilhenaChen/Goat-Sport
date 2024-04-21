using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using GoatCoachAPI.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Controllers
{
	[Authorize]
	[Route("[controller]/[action]")]
	[ApiController]
	public class CalendarsController : ControllerBase
	{
		private readonly DataContext _context;
		private readonly ICalendarRepository calendarRepository;

		public CalendarsController(DataContext context, ICalendarRepository _calendarRepository)
		{
			_context = context;
			calendarRepository = _calendarRepository;
		}

		// GET: api/Calendars
		[HttpGet("{TeamId}/{SportId}")]
		public async Task<ActionResult> GetCalendars(int TeamId, int SportId)
		{
			var calendarDb = await calendarRepository.GetByTeamSportIdsIncludeMatchesAsync(TeamId, SportId);

			if (calendarDb == null)
				return NotFound("Not found any events for your team!");

			List<Match> matchesList = calendarDb.Matches;
			List<Practice> practicesList = calendarDb.Practices;

			List<MatchVM> matches = new List<MatchVM>();
			List<PracticeVM> practices = new List<PracticeVM>();

			foreach (var matchDb in matchesList)
			{
				var match = new MatchVM
				{
					Description = matchDb.Opponent,
					Date = matchDb.Date,
					FinalScore = matchDb.FinalResult,
					IsHome = matchDb.IsHome
				};
				matches.Add(match);
			}

			foreach (var practiceDb in practicesList)
			{
				var practice = new PracticeVM
				{
					Description = practiceDb.Description,
					Date = practiceDb.Date
				};
				practices.Add(practice);
			}

			var model = new GetCalendarVM
			{
				Practices = practices,
				Matches = matches
			};

			return Ok(model);
		}

		[HttpGet("{TeamId}/{SportId}")]
		public async Task<ActionResult> GetThreeCalendarEvents(int TeamId, int SportId)
		{
			var calendarDb = await calendarRepository.GetByTeamSportIdsIncludeMatchesAsync(TeamId, SportId);

			if (calendarDb == null)
				return NotFound("Not found any events for your team!");

			List<Match> matchesList = calendarDb.Matches;
			List<Practice> practicesList = calendarDb.Practices;

			List<MatchVM> matches = new List<MatchVM>();
			List<PracticeVM> practices = new List<PracticeVM>();
			List<DateTime> dates = new List<DateTime>();

			foreach (var matchDb in matchesList)
			{
				if (DateTime.Now <= matchDb.Date)
					dates.Add(matchDb.Date);
			}

			foreach (var practiceDb in practicesList)
			{
				if (DateTime.Now <= practiceDb.Date)
					dates.Add(practiceDb.Date);
			}

			var resultDates = dates.OrderBy(d => d.Millisecond).ToList();

			foreach (var date in resultDates.Take(3))
			{
				var matchesResults = matchesList.Where(m => m.Date == date).ToList();
				if (matchesResults.Count > 0)
				{
					foreach (var match in matchesResults)
					{
						matches.Add(new MatchVM
						{
							Date = date,
							Description = match.Opponent,
							FinalScore = match.FinalResult,
							IsHome = match.IsHome,
							Order = resultDates.IndexOf(date)
						});
					}
				}

				var practiceResults = practicesList.Where(m => m.Date == date).ToList();
				if (practiceResults.Count > 0)
				{
					foreach (var match in practiceResults)
					{
						practices.Add(new PracticeVM
						{
							Date = date,
							Description = match.Description,
							Order = resultDates.IndexOf(date)
						});
					}
				}
			}

			var model = new GetCalendarVM
			{
				Practices = practices,
				Matches = matches
			};

			return Ok(model);
		}

		// GET: api/Calendars/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Calendar>> GetCalendar(int id)
		{
			var calendar = await _context.Calendars.FindAsync(id);

			if (calendar == null)
			{
				return NotFound();
			}

			return calendar;
		}

		// PUT: api/Calendars/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutCalendar(int id, Calendar calendar)
		{
			if (id != calendar.Id)
			{
				return BadRequest();
			}

			_context.Entry(calendar).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!CalendarExists(id))
				{
					return NotFound();
				}
				else
				{
					throw;
				}
			}

			return NoContent();
		}

		// POST: api/Calendars
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Calendar>> PostCalendar(Calendar calendar)
		{
			_context.Calendars.Add(calendar);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetCalendar", new { id = calendar.Id }, calendar);
		}

		// DELETE: api/Calendars/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteCalendar(int id)
		{
			var calendar = await _context.Calendars.FindAsync(id);
			if (calendar == null)
			{
				return NotFound();
			}

			_context.Calendars.Remove(calendar);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool CalendarExists(int id)
		{
			return _context.Calendars.Any(e => e.Id == id);
		}
	}
}
