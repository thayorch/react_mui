import Typography from '@mui/material/Typography';
import ArrowRightIcon from "@mui/icons-material/ArrowRight";



function Info() {
  return (
    <>
      <div className='info'>
      <Typography variant="h3" >Thadchanon Maidee</Typography>
          <Typography>
            <ArrowRightIcon /> Student at Computer Science CMU
          </Typography>
            
            <ArrowRightIcon /> ChiangMai University
          
          <Typography>
            <ArrowRightIcon /> Basic Frontend Skill
          </Typography>
            
            <ArrowRightIcon /> Basic React
          
          <Typography>
            <ArrowRightIcon /> Basic Vue
          </Typography>
            <ArrowRightIcon /> Contact Me
      </div>
    </>
  );
}

export default Info;
