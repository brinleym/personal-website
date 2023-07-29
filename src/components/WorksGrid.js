import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkCard from './WorkCard';

const WorksGrid = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <WorkCard
              type="code"
              title="Freelance Work"
              description="See customer reviews and sample projects!"
              link="https://brinleym.notion.site/Brinley-Freelance-Home-e83e68056cf345e9836f3e9a6632d4f5"
            >
          </WorkCard>
        </Grid>     
        <Grid item xs={12} md={4}>
          <WorkCard
              type="podcast"
              title="Tech Futures Podcast"
              description="Was formally the host of the Tech Futures Podcast, a 
              podcast about the national security implications of emerging
              technology."
              link="https://mitrestechfuturespodcast.buzzsprout.com/"
            >
          </WorkCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <WorkCard
            type="code"
            title="Medical Cutsheets (aka Medsheet)"
            description="Optimize your doctor's appointment with a one-page
            overview of your health status and concerns."
            link="https://medsheet.gitlab.io/landing/"
            >
          </WorkCard>  
        </Grid>
        <Grid item xs={12} md={4}>
          <WorkCard
              type="written"
              title="STEM in the Age of TikTok"
              description="How has TikTok shaped the way we learn about science
              and technology?"
              link="https://drive.google.com/drive/folders/18PhYQw0JhZZCV1_9Yo80ZO5bZJ2DnQzI?usp=sharing"
            >
            </WorkCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <WorkCard
            type="written"
            title="Early Career Hacks"
            description="Helpful hacks for the college to work transition"
            link="https://drive.google.com/file/d/1twqH4-hnAQ4_xZQ207Eg2vt9lvV8vNoC/view?usp=sharing"
          >
          </WorkCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <WorkCard
            type="written"
            title="Serverless Computing Research"
            description="Serverless Computing is a common buzzword in cloud
            computing, but what is its relationship (if any) to networking?"
            link="https://drive.google.com/file/d/1xOQoX3BNBfta2BllbE0wNTZdOScboOxu/view?usp=sharing"
          >
          </WorkCard>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default WorksGrid;