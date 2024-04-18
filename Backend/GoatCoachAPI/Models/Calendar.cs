using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Models
{
	public class Calendar
	{
		public int Id { get; set; }

		public DateOnly SeasonStart { get; set; }

		public DateOnly SeasonEnd { get; set; }

		public List<Practice>? Practices { get; set; }

		public List<Match>? Matches { get; set; }

		//Relationships
		public int TeamId { get; set; }
		[ForeignKey("TeamId")]
		public Team Team { get; set; }

		public int SportId { get; set; }
		[ForeignKey("SportId")]
		public Sport Sport { get; set; }
	}
}
