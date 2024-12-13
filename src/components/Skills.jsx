import Typography from '@mui/material/Typography';
import CustomCard from "./env/CustomCard";

const cardData = [
  {
    title: "Basic React",
    body: "the basic React framework",
    img:"https://svgmix.com/uploads/e86a0a-react.svg",
  },
  {
    title: "Basic Vue",
    body: "the basic Vue framework",
    img:"https://svgmix.com/uploads/c49ded-vue.svg",
  },
  {
    title: "Basic Svelte",
    body: "the basic Svelte framework",
    img:"https://svgmix.com/uploads/cf27a7-svelte-icon.svg",
  },
  {
    title: "Advance React",
    body: "the advance React framework",
    img:"https://svgmix.com/uploads/e86a0a-react.svg",
  },
  {
    title: "Advance Vue",
    body: "the advance Vue framework",
    img:"https://svgmix.com/uploads/c49ded-vue.svg",
  },
  {
    title: "Advance Svelte",
    body: "the advance Svelte framework",
    img:"https://svgmix.com/uploads/cf27a7-svelte-icon.svg",
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
