using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Data.Models
{
    public class Note
    {
        public int Id { get; set; }

        [MinLength(3)]
        [MaxLength(50)]
        public string Title { get; set; }

        [Required(ErrorMessage = "Description is required!")]
        [MinLength(10, ErrorMessage = "Description is too short!")]
        [MaxLength(200, ErrorMessage = "Description is too long!")]
        public string Description { get; set; }

        public DateTime Date { get; set; } = DateTime.Now;

        //Relationships
        public int PlayerId { get; set; }
        [ForeignKey("PlayerId")]
        public Player Player { get; set; }
    }
}
