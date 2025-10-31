@"
namespace ALXListingApp.Interfaces
{
    public interface CardProps
    {
        string Title { get; set; }
        string Image { get; set; }
        decimal Price { get; set; }
        string Location { get; set; }
        string Description { get; set; }
        double? Rating { get; set; }
    }

    public interface ButtonProps
    {
        string Children { get; set; }
        string Variant { get; set; }
        string Size { get; set; }
        Action OnClick { get; set; }
        bool Disabled { get; set; }
        string Type { get; set; }
    }

    public interface Listing
    {
        string Id { get; set; }
        string Title { get; set; }
        string Description { get; set; }
        string Image { get; set; }
        decimal Price { get; set; }
        string Location { get; set; }
        double Rating { get; set; }
        string[] Amenities { get; set; }
    }
}
"@ | Out-File -FilePath "interfaces\index.cs" -Encoding utf8