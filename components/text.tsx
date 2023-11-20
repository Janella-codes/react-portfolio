'use client';
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '@/context/theme-context';

export default function Experience2() {
  const { ref } = useSectionInView('Experience');
  const {theme} = useTheme();
  return (
    <section
 
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>

      <VerticalTimelineElement>
      </VerticalTimelineElement>
         
        
           
           <VerticalTimelineElement
          visible={true}
    className="vertical-timeline-element--work"
    
   
    contentStyle={{
      background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
      width: "480px",
      left: "310px",
      marginRight: "10px",
      boxShadow: "none",
    }}
     
 

    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2008 - 2010"
 
  >
    
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    visible={true}
    date="2006 - 2008"
    className="vertical-timeline-element--work"
    
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{
      background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
      width: "480px",
      right: "310px",
      marginLeft: "10px",
      boxShadow: "none",
    }}
    
  >
    <h3 className="vertical-timeline-element-title">This one</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  visible={true}
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentStyle={{
      background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
      width: "480px",
      left: "310px",
      marginRight: "10px",
      boxShadow: "none",
      
    }}

  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}

  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>


            


      </VerticalTimeline>
    </section>
  );
}




/* <div key={index} ref={ref} className="py-10 px-10 ml-0 vertical-timeline-element dark:bg-white/10 dark:text-white/80 ">
           
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                  contentStyle={{
                  background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.8rem 2rem',
                  textAlignLast: "left",
                  margin: "10px -30px 40px -20px"
                }}
                contentArrowStyle={{
                  borderRight:  '7px solid #9ca3af', margin: "0px 0px",
                }}
                visible={inView}
                date={item.date}
                icon={item.icon}
                iconStyle={{ background: ' rgb(33, 150, 243)', color: '#fff', fontSize: "1.5rem" }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className=" text-gray-900 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </div> */
