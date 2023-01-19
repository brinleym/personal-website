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
              description="Created podcast series on emerging technology."
              details="Topics included Quantum Computing, Metamaterials, 
              advanced Cryptography - and many more!"
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
              details="None."
              link="https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-ac91ea8e92"
            >
            </WorkCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <WorkCard
              type="code"
              title="Medical Cutsheets (aka Medsheet)"
              description="Developed system enabling patients to create visually
              appealing one-page overviews of their health status and concerns."
              details="Since the average doctor's appointment lasts a mere 20 
              minutes, it is critical for patients to prepare for
              these appointments whenever possible. The basis for my preparation 
              system is a fillable form (I call it a Medical Cutsheet or 
              Medsheet for short). Medical Cutsheets are nothing like the 
              confusing and un-user-friendly forms that we're used to. Instead, they were 
              designed with solely the patient in mind and are thus simple and 
              intuitive, making it easy for the patient to identify and 
              clearly outline their chief concerns and questions. Click the link 
              above to see a demo!"
              link="https://medsheet.gitlab.io/landing/"
              >
            </WorkCard>  
          </Grid>
          <Grid item xs={12} md={4}>
            <WorkCard
                type="written"
                title="STEM in the Age of TikTok"
                description="Created workshop on creating short videos for
                teaching STEM concepts."
                details="Topics included the pros and cons of TikTok as a learning
                tool and how to use TikTok to teach others about STEM."
                link="https://drive.google.com/drive/folders/18PhYQw0JhZZCV1_9Yo80ZO5bZJ2DnQzI?usp=sharing"
              >
              </WorkCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <WorkCard
              type="written"
              title="Early Career Hacks"
              description="Developed a visual guide for college-to-work
              transition hacks; used to complement a talk I gave on the
              subject."
              details="This visual guide provides some helpful 
              pointers around the various aspects of life (routine, mental health, personal
              finances, etc.,) that go in to maximizing a new graduate's success
              in their first job."
              link="https://drive.google.com/file/d/1twqH4-hnAQ4_xZQ207Eg2vt9lvV8vNoC/view?usp=sharing"
            >
            </WorkCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <WorkCard
              type="written"
              title="Serverless Computing Research"
              description="Co-authored a report on the feasibility of bringing 
              serverless compute capabilities to compute-constrained 
              environments at network edges."
              details="The paper is broken into six sections that are each
              self-contained. The first
              section describes the evolution of the Internet and Cloud 
              Computing. The second section defines terms (avoiding marketing 
              speak). The third section compares the key vendors of serverless 
              and edge computing capabilities as-a-service. The fourth section 
              provides an organized set of security recommendations for
              leveraging these services. The fifth section describes viable and 
              emerging use cases for these services. And the sixth section 
              summarizes the pros and cons of serverless and edge computing and 
              provides definitive recommendations for choosing vendors when 
              there is a need to leverage servleress and/or edge compute 
              as-a-service."
              link="https://drive.google.com/file/d/1xOQoX3BNBfta2BllbE0wNTZdOScboOxu/view?usp=sharing"
            >
            </WorkCard>
          </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default WorksGrid;