﻿using GoatCoachAPI.Data.Models;

namespace GoatCoachAPI.Contracts
{
    public interface ICalendarRepository : IGenericRepository<Calendar>
    {
        Task<Calendar> GetByTeamSportIdsAsync(int teamId, int sportId);
    }
}
