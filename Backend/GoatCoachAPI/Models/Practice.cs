using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Models
{
	public class Practice
	{
		public int Id { get; set; }

		[Required(ErrorMessage = "Description is required!")]
		[MinLength(10, ErrorMessage = "Description is too short!")]
		[MaxLength(200, ErrorMessage = "Description is too long!")]
		public string Description { get; set; }

		public DateTime Date { get; set; }

		public List<Practice_Player>? PracticesPlayers { get; set; }

		//Relationships
		public int CalendarId { get; set; }
		[ForeignKey("CalendarId")]
		public Calendar Calendar { get; set; }
	}
}
