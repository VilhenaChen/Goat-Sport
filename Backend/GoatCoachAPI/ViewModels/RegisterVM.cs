using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.ViewModels
{
	public class RegisterVM
	{
		[Required(ErrorMessage = "Username is required!")]
		public string Username { get; set; }

		[Required(ErrorMessage = "Password is required!")]
		public string Password { get; set; }

		[EmailAddress]
		public string Email { get; set; }

		[Required(ErrorMessage = "Team is required!")]
		public string Team { get; set; }

		[Required(ErrorMessage = "Sports is required!")]
		public List<int> Sports { get; set; }
	}
}
