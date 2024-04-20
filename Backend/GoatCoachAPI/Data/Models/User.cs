using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.Data.Models
{
	public class User : IdentityUser
	{
		[MaxLength(100)]
		public string FullName { get; set; }
	}
}
