using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class SportRepository : GenericRepository<Sport>, ISportRepository
	{
		public SportRepository(DataContext _context) : base(_context)
		{
		}
	}
}
