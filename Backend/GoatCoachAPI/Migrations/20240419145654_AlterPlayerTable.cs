using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GoatCoachAPI.Migrations
{
    /// <inheritdoc />
    public partial class AlterPlayerTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Players_Positions_PositionId",
                table: "Players");

            migrationBuilder.DropTable(
                name: "Positions");

            migrationBuilder.RenameColumn(
                name: "PositionId",
                table: "Players",
                newName: "SportId");

            migrationBuilder.RenameIndex(
                name: "IX_Players_PositionId",
                table: "Players",
                newName: "IX_Players_SportId");

            migrationBuilder.AddColumn<string>(
                name: "Position",
                table: "Players",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Sports_SportId",
                table: "Players",
                column: "SportId",
                principalTable: "Sports",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Players_Sports_SportId",
                table: "Players");

            migrationBuilder.DropColumn(
                name: "Position",
                table: "Players");

            migrationBuilder.RenameColumn(
                name: "SportId",
                table: "Players",
                newName: "PositionId");

            migrationBuilder.RenameIndex(
                name: "IX_Players_SportId",
                table: "Players",
                newName: "IX_Players_PositionId");

            migrationBuilder.CreateTable(
                name: "Positions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Positions", x => x.Id);
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Players_Positions_PositionId",
                table: "Players",
                column: "PositionId",
                principalTable: "Positions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
