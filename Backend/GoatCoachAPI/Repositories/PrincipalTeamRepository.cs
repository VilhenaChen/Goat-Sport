using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class PrincipalTeamRepository : GenericRepository<PrincipalTeam>, IPrincipalTeamRepository
    {
        public PrincipalTeamRepository(DataContext _context) : base(_context) 
        { 
        }
    }
}
