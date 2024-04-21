using GoatCoachAPI.Contracts;
using GoatCoachAPI.Data;
using GoatCoachAPI.Data.Models;
using GoatCoachAPI.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(options =>
{
	options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
builder.Services.AddIdentityApiEndpoints<User>()
	.AddEntityFrameworkStores<DataContext>();

builder.Services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
builder.Services.AddScoped<ITeamRepository, TeamRepository>();
builder.Services.AddScoped<ISportRepository, SportRepository>();
builder.Services.AddScoped<ISportTeamRepository, SportTeamRepository>();
builder.Services.AddScoped<IPlayerRepository, PlayerRepository>();
builder.Services.AddScoped<ICalendarRepository, CalendarRepository>();
builder.Services.AddScoped<IMatchRepository, MatchRepository>();
builder.Services.AddScoped<IPrincipalTeamRepository, PrincipalTeamRepository>();
builder.Services.AddScoped<IPrincipalTeamPlayersRepository, PrincipalTeamPlayersRepository>();
builder.Services.AddScoped<ISubstituteTeamRepository, SubstituteTeamRepository>();
builder.Services.AddScoped<ISubstituteTeamPlayersRepository, SubstituteTeamPlayersRepository>();
builder.Services.AddScoped<IPracticeRepository, PracticeRepository>();
builder.Services.AddScoped<IPracticePlayersRepository, PracticePlayersRepository>();
builder.Services.AddScoped<INoteRepository, NoteRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
	app.UseSwagger();
	app.UseSwaggerUI();
//}

app.MapIdentityApi<User>();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
