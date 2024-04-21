using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class SubstituteTeamRepository : GenericRepository<SubstituteTeam>, ISubstituteTeamRepository
    {
        public SubstituteTeamRepository(DataContext _context) : base(_context) 
        { 
        }
    }
}
