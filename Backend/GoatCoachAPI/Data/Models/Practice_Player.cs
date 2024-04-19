namespace GoatCoachAPI.Data.Models
{
    public class Practice_Player
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }

        public int PracticeId { get; set; }
        public Practice Practice { get; set; }
    }
}
