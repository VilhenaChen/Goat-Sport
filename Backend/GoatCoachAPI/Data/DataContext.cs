using GoatCoachAPI.Data.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GoatCoachAPI.Data
{
	public class DataContext : IdentityDbContext<User>
	{
		public DataContext(DbContextOptions<DataContext> options) : base(options)
		{
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			//define PK
			modelBuilder.Entity<Sport_Team>().HasKey(st => new
			{
				st.SportId,
				st.TeamId
			});

			modelBuilder.Entity<Sport_Team>()
			   .HasOne(st => st.Sport)//Sport_Team have one Sport
			   .WithMany(s => s.SportsTeams)//Sport have many Sport_Team
			   .HasForeignKey(st => st.SportId);//FK

			modelBuilder.Entity<Sport_Team>()
				.HasOne(st => st.Team)//Sport_Team have one Team
				.WithMany(t => t.SportsTeams)//Team have many Sport_Team
				.HasForeignKey(st => st.TeamId);//FK

			modelBuilder.Entity<Practice_Player>().HasKey(pp => new
			{
				pp.PlayerId,
				pp.PracticeId
			});

			modelBuilder.Entity<Practice_Player>()
			   .HasOne(pp => pp.Player)
			   .WithMany(p => p.PracticesPlayers)
			   .HasForeignKey(pp => pp.PlayerId);

			modelBuilder.Entity<Practice_Player>()
				.HasOne(pp => pp.Practice)
				.WithMany(p => p.PracticesPlayers)
				.HasForeignKey(pp => pp.PracticeId);

			modelBuilder.Entity<PrincipalTeam_Player>().HasKey(ptp => new
			{
				ptp.PlayerId,
				ptp.PrincipalTeamId
			});

			modelBuilder.Entity<PrincipalTeam_Player>()
			   .HasOne(ptp => ptp.Player)
			   .WithMany(p => p.PrincipalTeamPlayers)
			   .HasForeignKey(ptp => ptp.PlayerId);

			modelBuilder.Entity<PrincipalTeam_Player>()
				.HasOne(ptp => ptp.PrincipalTeam)
				.WithMany(pt => pt.PrincipalTeamPlayers)
				.HasForeignKey(ptp => ptp.PrincipalTeamId);

			modelBuilder.Entity<SubstituteTeam_Player>().HasKey(stp => new
			{
				stp.PlayerId,
				stp.SubstituteTeamId
			});

			modelBuilder.Entity<SubstituteTeam_Player>()
			   .HasOne(stp => stp.Player)
			   .WithMany(p => p.SubstituteTeamPlayers)
			   .HasForeignKey(stp => stp.PlayerId);

			modelBuilder.Entity<SubstituteTeam_Player>()
				.HasOne(stp => stp.SubstituteTeam)
				.WithMany(st => st.SubstituteTeamPlayers)
				.HasForeignKey(stp => stp.SubstituteTeamId);

			modelBuilder.Entity<Calendar>().HasIndex(c => c.TeamId).IsUnique(false);

			base.OnModelCreating(modelBuilder);
		}

		public DbSet<Team> Teams { get; set; }
		public DbSet<Player> Players { get; set; }
		public DbSet<Calendar> Calendars { get; set; }
		public DbSet<Sport> Sports { get; set; }
		public DbSet<Sport_Team> Sports_Teams { get; set; }
		public DbSet<Note> Notes { get; set; }
		public DbSet<Practice> Practices { get; set; }
		public DbSet<Match> Matches { get; set; }
		public DbSet<Practice_Player> Practices_Players { get; set; }
		public DbSet<ClinicalReport> ClinicalReports { get; set; }
		public DbSet<Punishment> Punishments { get; set; }
		public DbSet<SubstituteTeam> SubstituteTeams { get; set; }
		public DbSet<PrincipalTeam> PrincipalTeams { get; set; }
		public DbSet<PrincipalTeam_Player> PrincipalTeams_Players { get; set; }
		public DbSet<SubstituteTeam_Player> SubstituteTeams_Players { get; set; }
	}
}
