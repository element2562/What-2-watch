using Microsoft.EntityFrameworkCore.Migrations;

namespace What2Watch.Migrations
{
    public partial class identitymovie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "594dad7f-f313-4dcf-bf78-c506f89cb016", "2ee3ad20-e5c4-47f8-8f81-6dbd5c7fbb92" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "dada8e7a-2cbc-4af9-a8fb-99ed3116e028", 0, "f88a77c1-dc88-4335-b6b3-6bae03c09398", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEOcBEXV8ftB38oOR5QDhKgd+XcG8e8zsU9yd+MktbCQaYWyqO2+HGoqCsYbaReX0Fw==", null, false, "99604ecb-8085-4ea9-bf3b-93108b43d136", false, "jacob@jacob.com", "Jacob", "Henderson" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "dada8e7a-2cbc-4af9-a8fb-99ed3116e028", "f88a77c1-dc88-4335-b6b3-6bae03c09398" });

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "594dad7f-f313-4dcf-bf78-c506f89cb016", 0, "2ee3ad20-e5c4-47f8-8f81-6dbd5c7fbb92", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEJOOTO5lphogxtfGpETLw6e8F+Sbuly8cdOHK9yRDbLxEBd0xRsOZKXG9X2XeOnolw==", null, false, "72f267f4-3bf4-4224-9ab4-d9a4b5bb5347", false, "jacob@jacob.com", "Jacob", "Henderson" });
        }
    }
}
