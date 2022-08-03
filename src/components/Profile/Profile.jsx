
import React from 'react';


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
<div className="profile">
  <div className="description">
    <img
      src={this.props.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p className="name">{this.props.username}</p>
    <p className="tag">{"@"+this.props.tag}</p>
    <p className="location">{this.props.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{this.decimalViews(this.props.stats.followers)}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{this.decimalViews(this.props.stats.views)}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{this.decimalViews(this.props.stats.likes)}</span>
    </li>
  </ul>
</div>
)

    }

}