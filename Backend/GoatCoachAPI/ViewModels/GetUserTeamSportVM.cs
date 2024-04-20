using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.ViewModels
{
	public class GetUserTeamSportVM
	{
		public int TeamId {  get; set; }
		public List<int> Sports { get; set; }

	}
}
