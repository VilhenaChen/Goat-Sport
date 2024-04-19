using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class TeamRepository : GenericRepository<Team>, ITeamRepository
	{
		public TeamRepository(DataContext _context) : base(_context)
		{
		}
	}
}
