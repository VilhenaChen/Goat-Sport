using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Repositories
{
    public class CalendarRepository : GenericRepository<Calendar>, ICalendarRepository
    {
		private readonly DataContext context;

		public CalendarRepository(DataContext _context) : base(_context) 
        {
			context = _context;
		}

		public async Task<Calendar> GetByTeamSportIdsAsync(int teamId, int sportId)
		{
			return await context.Calendars.Where(c => c.TeamId == teamId && c.SportId == sportId).FirstOrDefaultAsync();
		}
	}
}
