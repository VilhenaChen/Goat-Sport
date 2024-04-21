using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Repositories
{
    public class PracticeRepository : GenericRepository<Practice>, IPracticeRepository
    {
        public PracticeRepository(DataContext _context) : base(_context) 
        { 
        }
    }
}
