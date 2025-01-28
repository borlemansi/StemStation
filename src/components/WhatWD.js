import React, { useEffect, useState } from 'react';
import Header from "./header";
import Footer from "./footer";
import './WhatWD.css';
import { supabase } from './supabaseClient';
import aboutpic from '../assets/aboutpic.jpeg';

const WhatWeDid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('drive')
          .select('title, discription, date, img_url')
          .order('date', { ascending: false });
        
        if (error) {
          throw error;
        }

        if (data) {
          const formattedData = data.map(project => ({
            ...project,
            date: formatDate(project.date), // Using our new date formatter
            img_url: project.img_url || aboutpic,
            description: project.discription
          }));
          
          setProjects(formattedData);
        }
      } catch (err) {
        console.error('Error fetching projects:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProjects();
  }, []);

  if (error) {
    return (
      <>
        <Header />
        <div className="what-we-did-page">
          <div className="container">
            <h2>Error loading projects</h2>
            <p>Sorry, we couldn't load the projects. Please try again later.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="what-we-did-page">
        <header className="page-header">
          <div className="container">
            <h1>Our Journey So Far</h1>
            <p>A timeline of our initiatives and their impact on STEM education</p>
          </div>
        </header>

        <section className="projects-section">
          <div className="container">
            {loading ? (
              <div className="loading-state">
                <p>Loading projects...</p>
              </div>
            ) : (
              <div className="projects-grid">
                {projects.length > 0 ? (
                  projects.map((project, index) => (
                    <div key={`project-${index}`} className="project-card">
                      <div className="project-image">
                        <img 
                          src={project.img_url} 
                          alt={project.title}
                          onError={(e) => {
                            e.target.src = aboutpic;
                            e.target.onerror = null;
                          }}
                        />
                      </div>
                      <div className="project-content">
                        <div className="project-date">{project.date}</div>
                        <h2 className="project-title">{project.title}</h2>
                        <p className="project-description">{project.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No projects found.</p>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WhatWeDid;