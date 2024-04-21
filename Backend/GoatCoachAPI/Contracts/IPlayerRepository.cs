using GoatCoachAPI.Data.Models;
using GoatCoachAPI.ViewModels;

namespace GoatCoachAPI.Contracts
{
    public interface IPlayerRepository : IGenericRepository<Player>
    {
        Task<List<GetPlayerDetailsVM>> GetPlayersFromTeamByTeamIdAndSPortId(int teamId, int sportId);
    }
}
