using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Models
{
	public class ClinicalReport
	{
		public int Id { get; set; }

		[Required(ErrorMessage = "Description is required!")]
		[MinLength(5, ErrorMessage = "Description is too short!")]
		[MaxLength(150, ErrorMessage = "Description is too long!")]
		public string Description { get; set; }

		public DateTime StartDate { get; set; }

		public DateTime EndDate { get; set; }

		//Relationships
		public int PlayerId { get; set; }
		[ForeignKey("PlayerId")]
		public Player Player { get; set; }
	}
}
