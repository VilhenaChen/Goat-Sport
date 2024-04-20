namespace GoatCoachAPI.ViewModels
{

    // Structure for the response of the Get Player Details
    public class GetPlayerDetailsVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age {  get; set; }
        public string Position { get; set; }
        public int SportId { get; set; }

    }
}
