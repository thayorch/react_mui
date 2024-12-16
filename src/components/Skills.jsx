import Typography from '@mui/material/Typography';
import CustomCard from "./env/CustomCard";

const cardData = [
  {
    title: "HTML",
    body: "The HTML Design",
    img:"https://svgmix.com/uploads/skillicons/29965e-html.svg",
  },
  {
    title: "CSS",
    body: "The CSS Design",
    img:"https://svgmix.com/uploads/skillicons/517351-css.svg",
  },
  {
    title: "JavaScript",
    body: "The JavaScript Programing",
    img:"https://svgmix.com/uploads/d64401-javascript.svg",
  },
  {
    title: "Python",
    body: "Python Programming",
    img:"https://svgmix.com/uploads/eb1e8c-python.svg",
  },
  {
    title:"Java",
    body:"Java OOP Programing",
    img:"https://svgmix.com/uploads/skillicons/b4ac72-java-light.svg",
  },
  {
    title:"C/C++",
    body:"C/C++ Programing",
    img:"https://svgmix.com/uploads/d9fc67-c.svg",
  },
  {
    title: "React",
    body: "Basic React framework",
    img:"https://svgmix.com/uploads/e86a0a-react.svg",
  },
  {
    title: "MUI",
    body: "MUI React framework",
    img: "https://camo.githubusercontent.com/2d207b0294721c57203fb9451bd14ef5ec0cf391790e4a2499cac1e7ed3bb9c9/68747470733a2f2f6d75692e636f6d2f7374617469632f6c6f676f2e737667",
  },
  {
    title: "Next.JS",
    body: "Next.JS framework",
    img:"https://camo.githubusercontent.com/c3635f27439ecdbf20e3cbf969c156f4040f10a0c8c836cf307d916dd8f806d4/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67",
  },
  {
    title: "Vue",
    body: "Basic Vue framework",
    img:"https://svgmix.com/uploads/c49ded-vue.svg",
  },
  {
    title: "Vuetify",
    body: "Vuetify Vue framework",
    img:"https://camo.githubusercontent.com/aafdcccc13673a95eee71819045e11c5a61a1d560129fc3c9affd46cdc5c3b9b/68747470733a2f2f63646e2e767565746966796a732e636f6d2f696d616765732f6c6f676f732f6c6f676f2e737667",
  },
  {
    title: "Tailwind CSS",
    body: "Tailwind CSS ",
    img:"https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
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
