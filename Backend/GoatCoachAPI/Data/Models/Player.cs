using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Data.Models
{
    public class Player
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Full Name is required!")]
        [MinLength(5, ErrorMessage = "Full Name is too short!")]
        [MaxLength(100)]
        [RegularExpression(@"^[a-zA-Z\s]*$", ErrorMessage = "Full Name should contain only letters!")]
        public string FullName { get; set; }

        public string? Attributes { get; set; }

        [Required(ErrorMessage = "Position is required!")]
        [MinLength(2, ErrorMessage = "Position is too short!")]
        [MaxLength(100)]
        public string Position { get; set; }

        public List<Note>? Notes { get; set; }

        public List<Practice_Player>? PracticesPlayers { get; set; }

        public ClinicalReport? ClinicalReport { get; set; }

        public List<PrincipalTeam_Player>? PrincipalTeamPlayers { get; set; }

        public List<SubstituteTeam_Player>? SubstituteTeamPlayers { get; set; }

        public List<Punishment>? Punishments { get; set; }

        //Relationships
        public int TeamId { get; set; }
        [ForeignKey("TeamId")]
        public Team Team { get; set; }

        public int SportId { get; set; }
        [ForeignKey("SportId")]
        public Sport Sport { get; set; }
    }
}
