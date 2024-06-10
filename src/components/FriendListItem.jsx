import React from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, names, isOnline }) => {
    return (
        <li className="item"><span className={`status ${isOnline ? 'online' : 'offline'}`}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className={names}></p></li>
    
    )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;