

import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from "prop-types";

 

 




  const Statistics = ({ stats, title }) => {
    
    function showTitle (props) {
      try{
      if (props.length > 0) {
      return <h2 className={styles.title}>{props}</h2>
      }
     } catch{
        console.log("title is undefined")
      }
      }
     
    return (
      <section className={styles.statistics} >
       {showTitle(title)}
       
      <ul className={styles.statList}>
      {stats.map(stats => (
        
          <li key = {stats.id} className={styles.item} style={{
background:`#${Math.floor(Math.random()*16777215).toString(16)}`
          }} >
          <span className={styles.label}>{stats.label}</span>
          <span className={styles.percentage}>{stats.percentage+ "%"}</span>
        </li>
      ))}
      </ul>
    </section>
    );
  };
  
      

export default Statistics;
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired

 

};


