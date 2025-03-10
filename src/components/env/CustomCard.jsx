import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function RecipeReviewCard({ data }) {
  // console.log(data);

  return (
    <div className="lists">
      {data.map((item) => (
        <Card sx={{ maxWidth: 350, mt:2 }} key={item.title} className="skills_card">
          <CardMedia
            component="img"
            height="194"
            sx={{maxWidth: 250}}
            image={item.img}
            alt={item.title}
          />
          <CardContent>
            {item.title}
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>

  );
}
