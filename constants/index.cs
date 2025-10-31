@"
namespace ALXListingApp.Constants
{
    public static class AppConfig
    {
        public static string AppName = \"ALX Listing App\";
        public static string Description = \"Airbnb clone for property listings\";
        public static string ApiBaseUrl = \"http://localhost:3000/api\";
    }

    public static class UiText
    {
        public static string BookNow = \"Book Now\";
        public static string ViewDetails = \"View Details\";
        public static string Search = \"Search\";
        public static string Loading = \"Loading...\";
        public static string NoListings = \"No listings found\";
    }

    public static class Routes
    {
        public static string Home = \"/\";
        public static string Listings = \"/listings\";
        public static string About = \"/about\";
        public static string Contact = \"/contact\";
    }
}
"@ | Out-File -FilePath "constants\index.cs" -Encoding utf8