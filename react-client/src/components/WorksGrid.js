import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkCard from './WorkCard';

import serverless_img from '../static/images/DataCenter.jpg';
import lattice_img from '../static/images/LatticeTower.jpg';
import cellular_img from '../static/images/CellTower.jpg';
import stethoscope_img from '../static/images/Healthcare.jpg';
import pi_img from '../static/images/RaspberryPi.jpg';

const WorksGrid = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <WorkCard
            type="written"
            title="Serverless Computing Research"
            date="May, 2020"
            image={serverless_img}
            image_title="Data Center"
            description="This is a report that I co-authored on the feasibility of bringing serverless compute capabilities to 
                          compute-constrained environments at network edges."
            details="This paper was not designed to be read in its entirety. Rather, each of its six main sections are entirely
                      self contained and therefore readers will stand to benfit from reading a single section that is most
                      relevant to their objective, rather than the paper in its entirety. For our history buff readers, the first
                      section describes the evolution of the Internet and Cloud Computing. The second section defines terms 
                      (avoiding marketing speak). The third section compares the key vendors of serverless and edge computing
                      capabilities as-a-service. The fourth section provides an organized set of security recommendations for
                      leveraging these services. The fifth section describes viable and emerging use cases for these services. And 
                      the sixth section summarizes the pros and cons of serverless and edge computing and provides definitive
                      recommendations for choosing vendors when there is a need to leverage servleress and/or edge compute 
                      as-a-service."
            link="https://drive.google.com/file/d/1xOQoX3BNBfta2BllbE0wNTZdOScboOxu/view?usp=sharing"
          >
          </WorkCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkCard
            type="podcast"
            title="6G and Artificial Intelligence Podcast"
            date="March, 2021"
            image={cellular_img}
            image_title="Cell Tower"
            description="I hosted, wrote, and produced a podcast about the work on 6G and AI that is happening as part of 
                          MITRE's Research and Development program."
            details="As the worldwide rollout of 5th Generation (5G) cellular networks picks up pace, a team of researchers decide 
                     it’s time to start designing 6G. It’s an ambitious endeavor to say the least, as little is still known about 
                     what the impact of 5G will be, never mind what 6G will one day look like. Though one thing is clear: in 6G, 
                     digital information will no longer be confined to our screens. Whether it be through biocompatible computer 
                     chips, wearables, or self-driving cars, the world’s knowledge in our 6G future will be as accessible and 
                     seamlessly integrated into our daily lives as our own thoughts. This means that our future networks must be 
                     capable of transmitting vast sums of data almost instantaneously—a tall order when one considers the physical 
                     laws that will of course limit how fast we can transmit information over the air. Thus, 6G will be the first 
                     network wherein ubiquitous AI will be even more critical than the network architecture itself to drive the 
                     next wave of technological innovation. As the race to 6G begins, one question looms large: who will take the 
                     lead in building our future?
                     Approved for Public Release; Distribution Unlimited. Public Release Case Number 21-0675
                     © 2021 The MITRE Corporation. All rights reserved."

            link="https://drive.google.com/file/d/1HxZPtMnYUs5o6fBDs-uvUXCsNKbC_9uj/view?usp=sharing"
            >
          </WorkCard>           
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkCard
            type="podcast"
            title="Mechanical Metamaterials Podcast"
            date="April, 2021"
            image={lattice_img}
            image_title="3D printer"
            description="I hosted, wrote, and produced a podcast about the work on Mechanical Metamaterials that is happening as 
                          part of MITRE's Research and Development program."
            details="When a group of Mechanical Engineers team up to investigate the emerging field of Mechanical Metamaterials, 
                    they find that recent advancements in 3D printing technology are enabling scientists to prototype everything 
                    from better shields against blunt force trauma to cloaks that could render an object undetectable by SONAR 
                    sound waves! Meanwhile, a Nanoscientist discusses both the challenges and the promises of fabricating 
                    Mechanical Metamaterials. Having had a hand in the nano-imaging and fabrication efforts underway at Lawrence 
                    Berkeley and MIT, she is acutely aware of the challenges the come with 3D printing at such small size scales 
                    but sees great opportunity three orders of magnitude up the size scale—which happens to be the sweet spot for 
                    Mechanical Metamaterials. With a growing body of evidence showing astounding performance enhancements with 
                    the use of Mechanical Metamaterials, will the manufacturing technology catch up fast enough so we can one 
                    day see the benefits of this technology?
                    Approved for Public Release; Distribution Unlimited. Public Release Case Number 21-1372
                    © 2021 The MITRE Corporation. All rights reserved."
            link="https://drive.google.com/file/d/1n7MitolN3WmklgiO1y5l8ZurzzURxTVj/view?usp=sharing"
            >
            </WorkCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkCard
              type="code"
              title="Medical Cutsheets (aka Medsheet)"
              date="May, 2021"
              image={stethoscope_img}
              image_title="Stethoscope"
              description="I created this system to make better use of the limited time that I have at my doctor's appointments and
                            have published it with the hope that it will help other patients."
              details="Since the average doctor's appointment lasts a mere 20 minutes, it is critical for patients to prepare for
                        these appointments whenever possible. The basis for my preparation system is a fillable form (I call it a
                        Medical Cutsheet or Medsheet). Medical Cutsheets are nothing like the confusing and un-user-friendly forms
                        that we're used to. Rather, they were designed with solely the
                        patient in mind and are thus simple and intuitive to use, making it easy for the patient to identify and 
                        clearly outline their chief concerns and questions. Click the link above to get started!"
              link="https://medsheet.gitlab.io/landing/"
              >
            </WorkCard>  
        </Grid>
        <Grid item xs={12} md={6}>
          <WorkCard
            type="code"
            title="Coming soon: Object-detecting Raspberry Pi"
            date="TBD"
            image={pi_img}
            image_title="Mini computers"
            description=""
            details=""
            link=""
            >
          </WorkCard>  
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default WorksGrid;