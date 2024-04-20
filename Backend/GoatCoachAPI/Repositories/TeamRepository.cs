using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Repositories
{
	public class TeamRepository : GenericRepository<Team>, ITeamRepository
	{
		private readonly DataContext context;

		public TeamRepository(DataContext _context) : base(_context)
		{
			context = _context;
		}

		public async Task<Team> GetByUserIdAsync(string UserId)
		{
			var team = await context.Teams.Where(t => t.UserId == UserId).FirstAsync();
			return team;
		}
	}
}
