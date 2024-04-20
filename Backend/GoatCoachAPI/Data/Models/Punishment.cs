using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Data.Models
{
    public class Punishment
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Description is required!")]
        [MinLength(5, ErrorMessage = "Description is too short!")]
        [MaxLength(150, ErrorMessage = "Description is too long!")]
        public string Description { get; set; }

        public DateTime EndDate { get; set; }

        [Required(ErrorMessage = "Description is required!")]
        [MinLength(3, ErrorMessage = "Description is too short!")]
        [MaxLength(100, ErrorMessage = "Description is too long!")]
        public string Type { get; set; }

        //Relationships
        public int MatchId { get; set; }
        [ForeignKey("MatchId")]
        public Match Match { get; set; }

        public int PlayerId { get; set; }
        [ForeignKey("PlayerId")]
        public Player Player { get; set; }
    }
}
