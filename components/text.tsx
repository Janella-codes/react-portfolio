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
      ref={ref}
      id="experience"
      className="mb-28 max-w-[55rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          });
          return (
            <div key={index} ref={ref} className=" w-100 vertical-timeline-element dark:bg-white/10 dark:text-white/80 ">

            
          
          
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                dateClassName="mr-4 text-red-500"
              
                contentStyle={{
                
                  background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.8rem 2rem',
                  textAlignLast: "center",
                  margin: "10px 0px 40px 0px"
                }}
                contentArrowStyle={{
                  borderRight:  '7px solid #9ca3af', margin: "0px 0px",
                }}

               


                visible={inView}
                date="2006 - 2008"
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

