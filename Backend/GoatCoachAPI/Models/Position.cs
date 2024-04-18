using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.Models
{
	public class Position
	{
		public int Id { get; set; }

		[Required(ErrorMessage = "Name is required!")]
		[MinLength(2, ErrorMessage = "Name is too short!")]
		[MaxLength(50)]
		[RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Full Name should contain only letters!")]
		public string Name { get; set; }

		public List<Player>? Players { get; set; }
	}
}
