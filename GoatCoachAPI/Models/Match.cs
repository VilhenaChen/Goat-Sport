using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Models
{
	public class Match
	{
		public int Id { get; set; }

		[Required(ErrorMessage = "Description is required!")]
		[MinLength(5, ErrorMessage = "Description is too short!")]
		[MaxLength(150, ErrorMessage = "Description is too long!")]
		public string Description { get; set; }

		public DateTime Date { get; set; }

		public List<Punishment>? Punishments { get; set; }

		public SubstituteTeam SubstituteTeam { get; set; }

		public PrincipalTeam PrincipalTeam { get; set; }

		//Relationships
		public int CalendarId { get; set; }
		[ForeignKey("CalendarId")]
		public Calendar Calendar { get; set; }
	}
}
