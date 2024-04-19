using System.ComponentModel.DataAnnotations.Schema;

namespace GoatCoachAPI.Data.Models
{
    public class PrincipalTeam
    {
        public int Id { get; set; }

        public List<PrincipalTeam_Player>? PrincipalTeamPlayers { get; set; }

        //Relationships
        public int MatchId { get; set; }
        [ForeignKey("MatchId")]
        public Match Match { get; set; }
    }
}
