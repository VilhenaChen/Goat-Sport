using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Contracts
{
    public interface INoteRepository : IGenericRepository<Note>
    {
        Task<List<Note>> GetNoteListByPlayerId(int playerId);
    }
}
