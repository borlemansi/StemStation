import React, { useState, useEffect } from 'react';
import { ArrowDown, Star, Users, Beaker, Banknote } from 'lucide-react';
import { supabase } from './supabaseClient';
import Header from "./header";
import Footer from "./footer";
import aboutpic from '../assets/aboutpic.jpeg';
import member2 from '../assets/member2.jpeg';
import member1 from '../assets/member1.jpeg';
import './AboutUs.css';

const AboutUs = () => {
  // Match the exact labels from your StatsSection
  const [stats, setStats] = useState({
    'Crowd funded': '0',
    'Kits sponsored': '0',
    'Students educated': '0'
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const teamMembers = [
    {
      name: "Tanvi Raut",
      bio: "10th Grade Students Of Indus International School Pune",
      pic: member1
    },
    {
      name: "Saanjhi Dubey",
      bio: "10th Grade Students Of Indus International School Pune",
      pic: member2
    },
  ];

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log('Starting to fetch stats...');
        setLoading(true);
        setError(null);
        
        const { data, error: supabaseError } = await supabase
          .from('stats')
          .select('label, value');

        console.log('Received data from Supabase:', data);
        console.log('Supabase error if any:', supabaseError);

        if (supabaseError) {
          throw new Error(supabaseError.message);
        }

        if (data && data.length > 0) {
          const statsMap = {};
          data.forEach(stat => {
            console.log('Processing stat:', stat);
            statsMap[stat.label] = stat.value.toString();
          });
          console.log('Final statsMap:', statsMap);
          setStats(statsMap);
        } else {
          console.log('No data received from Supabase');
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);


  const labEquipment = [
    { name: "Basic Electric Circuit", quantity: 1, emoji: "⚡" },
    { name: "Torso", quantity: 1, emoji: "🫁" },
    { name: "Compound Microscope", quantity: 1, emoji: "🔬" },
    { name: "Magnet Shapes", quantity: 1, emoji: "🧲" },
    { name: "Prism", quantity: 2, emoji: "🌈" },
    { name: "Earth Globe, Medium sized", quantity: 1, emoji: "🌍" },
    { name: "Tuning Fork", quantity: 1, emoji: "🎵" },
    { name: "Petri Dish", quantity: 1, emoji: "🧫" },
    { name: "Glass Slides Microscope", quantity: 1, emoji: "🔍" },
    { name: "Cover Slips", quantity: 1, emoji: "📏" },
    { name: "Dropper", quantity: 1, emoji: "💧" },
    { name: "Solution Cleaning Microscope", quantity: 1, emoji: "🧪" },
    { name: "Compass", quantity: 1, emoji: "🧭" },
    { name: "Litmus Paper, Indicators", quantity: 1, emoji: "📝" },
    { name: "Test Tube, Beaker Plastic", quantity: 1, emoji: "🧪" }
  ];

  return (
    <>
      <Header />
      <div className="about-page">
        <header className="hero-section">
          <div className="hero-content">
            <h1>Igniting Young Minds, Building Future Scientists</h1>
            <p>Democratizing STEM education by placing scientific discovery directly into the hands of underprivileged children.</p>
            <ArrowDown className="bounce-arrow" />
          </div>
        </header>

        <section className="mission-section">
          <div className="container">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <div className="mission-image">
                <img src={aboutpic} alt="Students learning" />
              </div>
              <div className="mission-text">
                <p>As a youth-led initiative, we believe every child deserves the chance to experiment, explore, and embrace their scientific curiosity. Through our crowdfunded science kits and hands-on learning programs, we're transforming classrooms into laboratories of wonder for students in grades 1-4.</p>
                <ul className="mission-list">
                  {[
                    "Breaking down socioeconomic barriers in STEM education",
                    "Creating immersive learning experiences",
                    "Empowering diverse scientific thinkers",
                    "Building a community where curiosity meets opportunity"
                  ].map((item, index) => (
                    <li key={index}>
                      <Star className="star-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="impact-wrapper">
          <div className="container">
            <h2>Our Impact</h2>
            {loading ? (
              <div className="loading">Loading impact data...</div>
            ) : error ? (
              <div className="error">Error loading impact data: {error}</div>
            ) : (
              <div className="impact-grid">
                <div className="impact-card">
                  <Users className="impact-icon" />
                  <div className="impact-number">
                    {stats['Students educated'] || '0'}
                  </div>
                  <div className="impact-label">Students Reached</div>
                </div>
                <div className="impact-card">
                  <Beaker className="impact-icon" />
                  <div className="impact-number">
                    {stats['Kits sponsored'] || '0'}
                  </div>
                  <div className="impact-label">Science Kits Distributed</div>
                </div>
                <div className="impact-card">
                  <Banknote className="impact-icon" />
                  <div className="impact-number">
                    {stats['Crowd funded'] || '0'}
                  </div>
                  <div className="impact-label">Crowd Funded</div>
                </div>
              </div>
            )}
          </div>
        </section>


        <section className="lab-section">
          <div className="container">
            <h2>Our Lab Equipment Kit</h2>
            <div className="lab-grid">
              {labEquipment.map((item, index) => (
                <div key={index} className="lab-item">
                  <div className="lab-item-emoji">
                    {item.emoji}
                  </div>
                  <div className="lab-item-content">
                    <h3 className="lab-item-name">{item.name}</h3>
                    <p className="lab-item-quantity">Quantity: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="team-section">
          <div className="container">
            <h2>Our Team</h2>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <img
                    src={member.pic}
                    alt={member.name}
                    className="team-image"
                  />
                  <h3>{member.name}</h3>
                  <p className="team-bio">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;