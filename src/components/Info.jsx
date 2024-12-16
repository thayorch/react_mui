import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function Info() {
  return (
    <>
      <div className="info">
        <Typography variant="h3">Thadchanon Maidee</Typography>

        <Typography variant="h5">
          <ChevronRightIcon /> Student at Computer Science CMU
        </Typography>

        <Typography variant="h5">
          <ChevronRightIcon /> ChiangMai University
        </Typography>

        <Typography variant="h5">
          <ChevronRightIcon /> Frontend Developer
        </Typography>
        
        <Typography variant="h5">
          <ChevronRightIcon /> React
        </Typography>

        <Typography variant="h5">
          <ChevronRightIcon /> Vue
        </Typography>

        <Typography variant="h5">
          <ChevronRightIcon /> Web Development
        </Typography>

        <Typography variant="h5">
          <ChevronRightIcon /> Contact Me
        </Typography>
      </div>
    </>
  );
}

export default Info;
