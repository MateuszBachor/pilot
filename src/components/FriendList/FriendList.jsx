
import React from 'react';
import PropTypes from "prop-types";
import styles from './FirendList.module.css';

const FirendList = ({friends}) => {

    return(
        <ul className={styles.FriendListItem}>
      {friends.map(friend => (
        <li key = {friend.id} className={styles.item}>
        <span className={styles.status}
        style={friend.isOnline ? {color:"green"} : {color:"red"} }>•</span>
        
        <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{friend.name}</p>
      </li>
      ))}
      </ul>
    )

}
export default FirendList;

FirendList.propTypes = {  
    friends: PropTypes.array.isRequired
  };

  //