using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoatCoachAPI.Migrations
{
    /// <inheritdoc />
    public partial class FixCalendar : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Calendars_TeamId",
                table: "Calendars");

            migrationBuilder.CreateIndex(
                name: "IX_Calendars_TeamId",
                table: "Calendars",
                column: "TeamId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Calendars_TeamId",
                table: "Calendars");

            migrationBuilder.CreateIndex(
                name: "IX_Calendars_TeamId",
                table: "Calendars",
                column: "TeamId",
                unique: true);
        }
    }
}
