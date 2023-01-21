import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkCard from './WorkCard';

const WorksGrid = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <WorkCard
              type="podcast"
              title="MITRE's Tech Futures Podcast"
              description="Get the lowdown on an emerging technology in the
              time in takes to walk your dog!"
              link="https://mitrestechfuturespodcast.buzzsprout.com/"
            >
            </WorkCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <WorkCard
              type="code"
              title="AlgoExpert"
              description="Earned AlgoExpert Certification for successfully
              completing 100 coding problems on the platform."
              link="https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-ac91ea8e92"
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
                description="Workshop on how TikTok has changed the
                way we learn about STEM topics."
                link="https://drive.google.com/drive/folders/18PhYQw0JhZZCV1_9Yo80ZO5bZJ2DnQzI?usp=sharing"
              >
              </WorkCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <WorkCard
              type="written"
              title="Early Career Hacks"
              description="Visual guide for college-to-work
              transition hacks; used to complement a talk I gave on the
              subject."
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