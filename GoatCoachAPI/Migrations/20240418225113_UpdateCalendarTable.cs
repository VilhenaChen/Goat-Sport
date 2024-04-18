using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoatCoachAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateCalendarTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateOnly>(
                name: "SeasonEnd",
                table: "Calendars",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));

            migrationBuilder.AddColumn<DateOnly>(
                name: "SeasonStart",
                table: "Calendars",
                type: "date",
                nullable: false,
                defaultValue: new DateOnly(1, 1, 1));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SeasonEnd",
                table: "Calendars");

            migrationBuilder.DropColumn(
                name: "SeasonStart",
                table: "Calendars");
        }
    }
}
