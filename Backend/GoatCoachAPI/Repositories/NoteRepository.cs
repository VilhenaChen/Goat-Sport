using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Repositories
{
    public class NoteRepository : GenericRepository<Note>, INoteRepository
    {
        private readonly DataContext context;
        public NoteRepository(DataContext _context) : base(_context)
        {
            context = _context;
        }

        public async Task<List<Note>> GetNoteListByPlayerId(int playerId)
        {
            return await context.Notes.Where(n => n.PlayerId == playerId).ToListAsync();
        }
    }
}
