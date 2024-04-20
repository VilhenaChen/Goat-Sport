using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class SportTeamRepository : GenericRepository<Sport_Team>, ISportTeamRepository
	{
		public SportTeamRepository(DataContext _context) : base(_context)
		{
		}
	}
}
