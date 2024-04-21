using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.ViewModels
{
	public class GetCalendarVM
	{
		public List<PracticeVM> Practices { get; set; }

		public List<MatchVM> Matches { get; set; }
	}

	public class PracticeVM
	{
		public string Description { get; set; }
		public DateTime Date { get; set; }
		public int Order { get; set; }
	}

	public class MatchVM
	{
		public string Description { get; set; }

		public DateTime Date { get; set; }

		public string FinalScore { get; set; }

		public bool IsHome { get; set; }
		public int Order { get; set; }
	}
}
