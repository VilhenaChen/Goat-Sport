namespace GoatCoachAPI.Data.Models
{
    public class Sport_Team
    {
        public int TeamId { get; set; }
        public Team Team { get; set; }

        public int SportId { get; set; }
        public Sport Sport { get; set; }
    }
}
