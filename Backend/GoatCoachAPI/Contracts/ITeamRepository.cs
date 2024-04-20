using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Contracts
{
    public interface ITeamRepository : IGenericRepository<Team>
	{
		Task<Team> GetByUserIdAsync(string UserId);
	}
}
