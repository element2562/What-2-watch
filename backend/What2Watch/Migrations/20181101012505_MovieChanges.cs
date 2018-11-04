using Microsoft.EntityFrameworkCore.Migrations;

namespace What2Watch.Migrations
{
    public partial class MovieChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "UserRating",
                table: "Movie",
                nullable: true,
                oldClrType: typeof(double));

            migrationBuilder.AddColumn<string>(
                name: "Picture",
                table: "Movie",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Discriminator", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName", "FirstName", "LastName" },
                values: new object[] { "66ac8041-cc40-4a0d-b2c1-2976527262ee", 0, "fb56f9b8-92cc-410d-b2fa-449a0796cee7", "User", "jacob@jacob.com", true, false, null, "JACOB@JACOB.COM", "JACOB@JACOB.COM", "AQAAAAEAACcQAAAAEM5iVOZ/L6CKDUs7JSdgGNvOTR7t4haj4X5HQlRvhHIXW+4lkaJVAXdMWXf7y3/Iow==", null, false, "9e99266b-5d02-4dd9-a2d9-950e8576fde4", false, "jacob@jacob.com", "Jacob", "Henderson" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumns: new[] { "Id", "ConcurrencyStamp" },
                keyValues: new object[] { "66ac8041-cc40-4a0d-b2c1-2976527262ee", "fb56f9b8-92cc-410d-b2fa-449a0796cee7" });

            migrationBuilder.DropColumn(
                name: "Picture",
                table: "Movie");

            migrationBuilder.AlterColumn<double>(
                name: "UserRating",
                table: "Movie",
                nullable: false,
                oldClrType: typeof(double),
                oldNullable: true);
        }
    }
}
