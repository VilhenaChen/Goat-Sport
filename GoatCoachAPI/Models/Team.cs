using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.Models
{
	public class Team
	{
		public int Id { get; set; }

		[Required(ErrorMessage = "Name is required!")]
		[MinLength(3, ErrorMessage = "Name is too short!")]
		[MaxLength(50)]
		public string Name { get; set; }

		[Required]
		public string UserId { get; set; }

		public List<Player>? Players { get; set; }

		public List<Sport_Team>? SportsTeams { get; set; }

		public Calendar? Calendar { get; set; }
	}
}
