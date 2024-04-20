using System.ComponentModel.DataAnnotations;

namespace GoatCoachAPI.ViewModels
{
    public class CreatePlayerVM
    {
		[Required(ErrorMessage = "Full Name is required!")]
		[MinLength(5, ErrorMessage = "Full Name is too short!")]
		[MaxLength(100)]
		[RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Full Name should contain only letters!")]
		public string FullName { get; set; }

        public int Age { get; set; }
        public string Position {  get; set; }
        public int TeamId { get; set; }
        public int SportId { get; set; }
    }
}
