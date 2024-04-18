using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.Models
{
	public class User : IdentityUser
	{
		[Required(ErrorMessage = "Full Name is required!")]
		[MinLength(5, ErrorMessage = "Full Name is too short!")]
		[MaxLength(100)]
		[RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Full Name should contain only letters!")]
		public string FullName { get; set; }
	}
}
