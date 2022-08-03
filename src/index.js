import React from 'react';
import ReactDOM from 'react-dom/client';
import user from "users/user.json"
import './index.css';
import './components/Profile/Profile.css';

import { Profile } from 'components/Profile/Profile';


ReactDOM.createRoot(document.getElementById('root')).render(
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  
);
