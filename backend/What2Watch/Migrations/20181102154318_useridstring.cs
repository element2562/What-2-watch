using Microsoft.EntityFrameworkCore.Migrations;

namespace What2Watch.Migrations
{
    public partial class useridstring : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Movie_AspNetUsers_UserId1",
                table: "Movie");

            migrationBuilder.DropIndex(
                name: "IX_Movie_UserId1",
                table: "Movie");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "497fbd7a-37c2-4f21-9889-db7c57e21763", "54dec0ca-0d1f-417b-b58e-f0955d428bab" });

            migrationBuilder.DropColumn(
                name: "UserId1",
                table: "Movie");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Movie",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "594dad7f-f313-4dcf-bf78-c506f89cb016", 0, "2ee3ad20-e5c4-47f8-8f81-6dbd5c7fbb92", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEJOOTO5lphogxtfGpETLw6e8F+Sbuly8cdOHK9yRDbLxEBd0xRsOZKXG9X2XeOnolw==", null, false, "72f267f4-3bf4-4224-9ab4-d9a4b5bb5347", false, "jacob@jacob.com", "Jacob", "Henderson" });

            migrationBuilder.CreateIndex(
                name: "IX_Movie_UserId",
                table: "Movie",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Movie_AspNetUsers_UserId",
                table: "Movie",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Movie_AspNetUsers_UserId",
                table: "Movie");

            migrationBuilder.DropIndex(
                name: "IX_Movie_UserId",
                table: "Movie");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "594dad7f-f313-4dcf-bf78-c506f89cb016", "2ee3ad20-e5c4-47f8-8f81-6dbd5c7fbb92" });

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Movie",
                nullable: false,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<string>(
                name: "UserId1",
                table: "Movie",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "497fbd7a-37c2-4f21-9889-db7c57e21763", 0, "54dec0ca-0d1f-417b-b58e-f0955d428bab", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEBjjVkXfIZTM0SxntluLRQi6bSGkem4C53mki7MIdjZQFO+JjQGr/M/VJp1hwA8IHA==", null, false, "75e1f979-8be3-40f1-8671-1bf638eb8b29", false, "jacob@jacob.com", "Jacob", "Henderson" });

            migrationBuilder.CreateIndex(
                name: "IX_Movie_UserId1",
                table: "Movie",
                column: "UserId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Movie_AspNetUsers_UserId1",
                table: "Movie",
                column: "UserId1",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
