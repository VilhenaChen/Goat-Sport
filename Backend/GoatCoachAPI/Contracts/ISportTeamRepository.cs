using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Contracts
{
    public interface ISportTeamRepository : IGenericRepository<Sport_Team>
	{
        Task<List<Sport_Team>> GetSportTeamByTeamId(int teamId);

    }
}
