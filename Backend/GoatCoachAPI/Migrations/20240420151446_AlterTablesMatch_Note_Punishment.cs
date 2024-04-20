using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoatCoachAPI.Migrations
{
    /// <inheritdoc />
    public partial class AlterTablesMatch_Note_Punishment : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Description",
                table: "Matches",
                newName: "Opponent");

            migrationBuilder.AddColumn<bool>(
                name: "IsCritic",
                table: "Punishments",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Notes",
                type: "nvarchar(50)",
                maxLength: 50,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "FinalResult",
                table: "Matches",
                type: "nvarchar(10)",
                maxLength: 10,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsCritic",
                table: "Punishments");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Notes");

            migrationBuilder.DropColumn(
                name: "FinalResult",
                table: "Matches");

            migrationBuilder.RenameColumn(
                name: "Opponent",
                table: "Matches",
                newName: "Description");
        }
    }
}
