import "../App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";

import Info from "./Info";
import Contact from "./Contact";
import Skills from "./Skills";

// const initialHomeData = {
//   profileImage: '',
//   achivements: [],
//   skills: [],
//   testimonials: [],
// };

const contactsData = [
  {
    id: "Github",
    icon: <GitHubIcon fontSize="large" />,
    url: "https://github.com/thayorch",
  },
  {
    id: "LinkedIn",
    icon: <LinkedInIcon fontSize="large" />,
    url: "https://www.linkedin.com/in/thadchanon-maidee/",
  },
  {
    id: "Facebook",
    icon: <TwitterIcon fontSize="large" />,
    url: "https://www.facebook.com/lnwice0",
  },
  {
    id: "Email",
    icon: <EmailIcon fontSize="large" />,
    url: "mailto:thatcharnon.maidee@gmail.com",
  },
];

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      <Grid container>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className="d-flex align-items-center justify-content-center mb-4 mt-4 mb-md-0 mt-md-0"
        >
          {isLoading ? (
            <Skeleton
              variant="circular"
              sx={{
                minHeight: "250px",
                minWidth: "250px",
                height: {
                  md: "400px",
                  sm: "300px",
                  xs: "250px",
                },
                width: {
                  md: "400px",
                  sm: "300px",
                  xs: "250px",
                },
              }}
            />
          ) : (
            <Box
              component="img"
              src="/public/profile.jpg"
              alt="profile pic"
              sx={{
                borderRadius: "50%",
                border: "4px solid #fff",
                boxShadow: "0px 6px 12px #ccc",
                minHeight: "200px",
                minWidth: "200px",
                height: {
                  md: "400px",
                  sm: "300px",
                  xs: "250px",
                },
                width: {
                  md: "400px",
                  sm: "300px",
                  xs: "250px",
                },
              }}
            />
          )}
        </Grid>

        <Grid>
          <Info />
          <Contact contacts={contactsData} />
        </Grid>

        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          className="d-flex align-items-center justify-content-center mb-4 mt-4 mb-md-0 mt-md-0"
        ></Grid>
      </Grid>

      <Grid container>
        <Skills />
      </Grid>
    </div>
  );
};

export default Home;
