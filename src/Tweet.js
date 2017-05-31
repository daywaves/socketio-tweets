import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ user, text }) => (
  <div className="tweet">
    <img className="tweet__image" src={user.profile_image_url} alt="" />
    <div>
      <h1 className="tweet__username">{user.name}</h1>
      <p className="tweet__text">{text}</p>
    </div>
  </div>
);

Tweet.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_image_url: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Tweet;
