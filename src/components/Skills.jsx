import Typography from '@mui/material/Typography';
import CustomCard from "./env/CustomCard";

const cardData = [
  {
    title: "Basic React",
    body: "the basic React framework",
    img:"/assets/react.svg",
  },
  {
    title: "Basic Vue",
    body: "the basic Vue framework",
    img:"/assets/vue.svg",
  },
  {
    title: "Basic Svelte",
    body: "the basic Svelte framework",
    img:"/assets/svelte.svg",
  },
  {
    title: "Advance React",
    body: "the advance React framework",
    img: "/assets/react.svg",
  },
  {
    title: "Advance Vue",
    body: "the advance Vue framework",
    img:"/assets/vue.svg",
  },
  {
    title: "Advance Svelte",
    body: "the advance Svelte framework",
    img:"/assets/svelte.svg",
  },
];

function Skills() {
  return (
    <div>
      <Typography variant='h4' className='card'> Skill </Typography>
      <CustomCard data={cardData}/>
    </div>
  );
}

export default Skills;
