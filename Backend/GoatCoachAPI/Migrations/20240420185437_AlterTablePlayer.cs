using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoatCoachAPI.Migrations
{
    /// <inheritdoc />
    public partial class AlterTablePlayer : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Attributes",
                table: "Players");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Players",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Players");

            migrationBuilder.AddColumn<string>(
                name: "Attributes",
                table: "Players",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
