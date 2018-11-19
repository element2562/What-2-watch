using Microsoft.EntityFrameworkCore.Migrations;

namespace What2Watch.Migrations
{
    public partial class HasWatched : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Movie_AspNetUsers_UserId",
                table: "Movie");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "dada8e7a-2cbc-4af9-a8fb-99ed3116e028", "f88a77c1-dc88-4335-b6b3-6bae03c09398" });

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Movie",
                nullable: true,
                oldClrType: typeof(string));

            migrationBuilder.AddColumn<bool>(
                name: "HasWatched",
                table: "Movie",
                nullable: false,
                defaultValue: false);

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "9c672a84-4332-4ca3-a214-69862ba2d5cf", 0, "d1f73a87-f8d4-44b0-93e8-999bce9fd932", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEF4yoqMonvTWev0NH0/45mpZJVQ9SDwXWGaDFGZfL0FrEW/E6rddnjD4uCQDpTU0Xg==", null, false, "bd5b7249-a0d6-4674-8873-d2edc659ada3", false, "jacob@jacob.com", "Jacob", "Henderson" });

            migrationBuilder.AddForeignKey(
                name: "FK_Movie_AspNetUsers_UserId",
                table: "Movie",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Movie_AspNetUsers_UserId",
                table: "Movie");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "9c672a84-4332-4ca3-a214-69862ba2d5cf", "d1f73a87-f8d4-44b0-93e8-999bce9fd932" });

            migrationBuilder.DropColumn(
                name: "HasWatched",
                table: "Movie");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Movie",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "dada8e7a-2cbc-4af9-a8fb-99ed3116e028", 0, "f88a77c1-dc88-4335-b6b3-6bae03c09398", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEOcBEXV8ftB38oOR5QDhKgd+XcG8e8zsU9yd+MktbCQaYWyqO2+HGoqCsYbaReX0Fw==", null, false, "99604ecb-8085-4ea9-bf3b-93108b43d136", false, "jacob@jacob.com", "Jacob", "Henderson" });

            migrationBuilder.AddForeignKey(
                name: "FK_Movie_AspNetUsers_UserId",
                table: "Movie",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
