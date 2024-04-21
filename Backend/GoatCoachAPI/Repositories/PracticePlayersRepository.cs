using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class PracticePlayersRepository : GenericRepository<Practice_Player>, IPracticePlayersRepository
	{
        public PracticePlayersRepository(DataContext _context) : base(_context) 
        { 
        }
    }
}
