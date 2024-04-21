using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class PrincipalTeamPlayersRepository : GenericRepository<PrincipalTeam_Player>, IPrincipalTeamPlayersRepository
    {
        public PrincipalTeamPlayersRepository(DataContext _context) : base(_context) 
        { 
        }
    }
}
