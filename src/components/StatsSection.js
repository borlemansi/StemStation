import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import './StatsSection.css';
import statspic from '../assets/statspic.png';

const StatsSection = () => {
  const [stats, setStats] = useState([
    {
      icon: "₹",
      value: "0",
      label: "Crowd funded"
    },
    {
      icon: "📦",
      value: "0",
      label: "Kits sponsored"
    },
    {
      icon: "🎓",
      value: "0",
      label: "Students educated"
    }
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        console.log('Fetching stats started');
        setLoading(true);
        setError(null);

        // Log the actual SQL query for debugging
        console.log('Executing Supabase query...');
        
        const { data, error: supabaseError } = await supabase
          .from('stats')
          .select('label, value');

        console.log('Raw data from Supabase:', data);

        if (supabaseError) {
          throw new Error(supabaseError.message);
        }

        if (data && data.length > 0) {
          const updatedStats = stats.map(stat => {
            // Find matching data by label
            const dbStat = data.find(d => d.label === stat.label);
            return {
              ...stat,
              value: dbStat ? dbStat.value.toString() : '0'
            };
          });
          console.log('Updated stats:', updatedStats);
          setStats(updatedStats);
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="impact-section">
      <div className="impact-container">
        <div className="impact-content">
          <h1 className="impact-title">Our Impact</h1>
          <p className="impact-subtitle">Transforming STEM education across Maharashtra</p>
          
          <div className="stats-container">
            {loading ? (
              <div className="loading-message">Loading stats...</div>
            ) : error ? (
              <div className="error-message">{error}</div>
            ) : (
              stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-text">
                    <div className="stat-number">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="impact-image-container">
          <img 
            src={statspic}
            alt="STEM Education Impact" 
            className="impact-image"
          />
        </div>
      </div>
    </div>
  );
};

export default StatsSection;