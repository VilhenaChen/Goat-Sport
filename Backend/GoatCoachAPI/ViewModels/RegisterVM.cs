using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.ViewModels
{
	public class RegisterVM
	{
		[Required(ErrorMessage = "Full Name is required!")]
		[MinLength(5, ErrorMessage = "Full Name is too short!")]
		[MaxLength(100)]
		[RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Full Name should contain only letters!")]
		public string FullName { get; set; }

		[Required(ErrorMessage = "Password is required!")]
		[RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$", ErrorMessage = "Password must meet requirements")]
		public string Password { get; set; }

		[EmailAddress]
		public string Email { get; set; }

		[Required(ErrorMessage = "Team is required!")]
		public string Team { get; set; }

		[Required(ErrorMessage = "Sports is required!")]
		public List<int> Sports { get; set; }
	}
}
