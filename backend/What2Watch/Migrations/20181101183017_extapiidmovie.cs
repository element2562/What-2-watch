using Microsoft.EntityFrameworkCore.Migrations;

namespace What2Watch.Migrations
{
    public partial class extapiidmovie : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "66ac8041-cc40-4a0d-b2c1-2976527262ee", "fb56f9b8-92cc-410d-b2fa-449a0796cee7" });

            migrationBuilder.AddColumn<int>(
                name: "ExtApiId",
                table: "Movie",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "497fbd7a-37c2-4f21-9889-db7c57e21763", 0, "54dec0ca-0d1f-417b-b58e-f0955d428bab", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEBjjVkXfIZTM0SxntluLRQi6bSGkem4C53mki7MIdjZQFO+JjQGr/M/VJp1hwA8IHA==", null, false, "75e1f979-8be3-40f1-8671-1bf638eb8b29", false, "jacob@jacob.com", "Jacob", "Henderson" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "497fbd7a-37c2-4f21-9889-db7c57e21763", "54dec0ca-0d1f-417b-b58e-f0955d428bab" });

            migrationBuilder.DropColumn(
                name: "ExtApiId",
                table: "Movie");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "66ac8041-cc40-4a0d-b2c1-2976527262ee", 0, "fb56f9b8-92cc-410d-b2fa-449a0796cee7", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEM5iVOZ/L6CKDUs7JSdgGNvOTR7t4haj4X5HQlRvhHIXW+4lkaJVAXdMWXf7y3/Iow==", null, false, "9e99266b-5d02-4dd9-a2d9-950e8576fde4", false, "jacob@jacob.com", "Jacob", "Henderson" });
        }
    }
}
