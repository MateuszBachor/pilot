
import React from 'react';
import PropTypes from "prop-types";
import styles from './Profile.module.css';

export class Profile extends React.Component {
  decimalViews(props){
    if(props>1000){
    return props=props/1000
    }else{
    return props
  }
}
    render(){ 
      
            
        
        return(
<div className={styles.profile}>
  <div className={styles.description}>
    <img
      src={this.props.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p className={styles.name}>{this.props.username}</p>
    <p className={styles.tag}>{"@"+this.props.tag}</p>
    <p className={styles.location}>{this.props.location}</p>
  </div>

    <ul className={styles.stats}>
    <li>
      <span className={styles.label}>Followers </span>
      <span className={styles.quantity}>{this.decimalViews(this.props.stats.followers)}</span>
    </li>
    <li>
      <span className={styles.label}>Views </span>
      <span className={styles.quantity}>{this.decimalViews(this.props.stats.views)}</span>
    </li>
    <li>
      <span className={styles.label}>Likes </span>
      <span className={styles.quantity}>{this.decimalViews(this.props.stats.likes)}</span>
    </li>
  </ul>
</div>
)

    }

}
Profile.propTypes = {
  location: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
 

};