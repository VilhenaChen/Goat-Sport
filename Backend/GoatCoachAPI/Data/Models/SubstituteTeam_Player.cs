namespace GoatCoachAPI.Data.Models
{
    public class SubstituteTeam_Player
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }

        public int SubstituteTeamId { get; set; }
        public SubstituteTeam SubstituteTeam { get; set; }
    }
}
