namespace GoatCoachAPI.Models
{
	public class PrincipalTeam_Player
	{
		public int PlayerId { get; set; }
		public Player Player { get; set; }

		public int PrincipalTeamId { get; set; }
		public PrincipalTeam PrincipalTeam { get; set; }
	}
}
