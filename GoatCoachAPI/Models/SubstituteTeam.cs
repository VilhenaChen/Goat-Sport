using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Models
{
	public class SubstituteTeam
	{
		public int Id { get; set; }

		public List<SubstituteTeam_Player>? SubstituteTeamPlayers { get; set; }

		//Relationships
		public int MatchId { get; set; }
		[ForeignKey("MatchId")]
		public Match Match { get; set; }
	}
}
