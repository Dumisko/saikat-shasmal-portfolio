import React,{ useEffect, useState, useRef } from 'react';
import projects from "../../Data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css"
function Projects() {

  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const containerRef = useRef(null); // Ref to the container element

  useEffect(() => {
    // Create an intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the component is in view
          observer.unobserve(entry.target); // Stop observing after it enters view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    // Start observing the component
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);



  return (
    <section ref={containerRef}
    className={`${styles.container} ${isVisible ? styles.visible : ''}`} id="projects">
      <h2 className={styles.title}>Projects</h2>

      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ProjectCard key={id} project={project}/>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
