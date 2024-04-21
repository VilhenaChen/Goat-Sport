using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.ViewModels
{
	public class CreateEventVM
	{
		public string GameType { get; set; }

		[MinLength(5, ErrorMessage = "Description is too short!")]
		[MaxLength(150, ErrorMessage = "Description is too long!")]
		public string Description { get; set; }

		public DateTime Date { get; set; }

		public List<int>? PrincipalTeamPlayers { get; set; }

		public List<int>? PracticeTeamPlayers { get; set; }

		public List<int>? SubstituteTeamPlayers { get; set; }

		public string? Local {  get; set; }

		public int TeamId { get; set; }

		public int SportId { get; set; }
	}
}
