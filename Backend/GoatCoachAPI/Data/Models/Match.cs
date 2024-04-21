using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Data.Models
{
    public class Match
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Opponent is required!")]
        [MinLength(5, ErrorMessage = "Opponent is too short!")]
        [MaxLength(150, ErrorMessage = "Opponent is too long!")]
        public string Opponent { get; set; }

		[MinLength(2)]
		[MaxLength(10)]
		public string? FinalResult { get; set; }

        public DateTime Date { get; set; }

        public bool IsHome { get; set; }

        public List<Punishment>? Punishments { get; set; }

        public SubstituteTeam? SubstituteTeam { get; set; }

        public PrincipalTeam? PrincipalTeam { get; set; }

        //Relationships
        public int CalendarId { get; set; }
        [ForeignKey("CalendarId")]
        public Calendar Calendar { get; set; }
    }
}
