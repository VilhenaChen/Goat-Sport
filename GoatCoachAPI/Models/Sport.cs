using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.Models
{
	public class Sport
	{
		public int Id { get; set; }

		[Required(ErrorMessage = "Name is required!")]
		[MinLength(3, ErrorMessage = "Name is too short!")]
		[MaxLength(50)]
		public string Name { get; set; }

		public List<Sport_Team>? SportsTeams { get; set; }

		public List<Calendar>? Calendars { get; set; }
	}
}
