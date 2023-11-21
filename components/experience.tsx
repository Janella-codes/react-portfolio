'use client';

import React from 'react'
import SectionHeading from './section-heading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';




export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();

  return (
    <section 
        ref={ref} 
        className='file:scroll-mt-28 mb-28 sm:mb-40'>
        <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline>
                {experiencesData.map((item, index) => (
                        <VerticalTimelineElement
                              key={index}
                              visible={true}
                              className="vertical-timeline-element--work"
                             contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                                textAlignLast: "left",
                              }}
                              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff', fontSize: "1.5rem" }}
                              contentArrowStyle={{
                                borderRight: "0.4rem solid #9ca3af",
                              }}
                              date={item.date}
                              icon={item.icon}
                        >
                            <h3 className="font-semibold capitalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-900 dark:text-white/75">
                                {item.description}
                            </p>
                        </VerticalTimelineElement>

                        
                    ))}


            </VerticalTimeline>
    </section>
  );
}

/*

<VerticalTimeline>
{experiencesData.map((item, index) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div key={index} ref={ref} className="py-10 px-10 ml-0 vertical-timeline-element dark:bg-white/10 dark:text-white/80 ">
   
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
      

    </div>
  );
})}
</VerticalTimeline> */




