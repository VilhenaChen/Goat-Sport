using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class SubstituteTeamPlayersRepository : GenericRepository<SubstituteTeam_Player>, ISubstituteTeamPlayersRepository
    {
        public SubstituteTeamPlayersRepository(DataContext _context) : base(_context) 
        { 
        }
    }
}
