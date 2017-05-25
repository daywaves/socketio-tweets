import React from 'react';
import PropTypes from 'prop-types';

const Tweet = ({ text }) => (
  <div>
    {text}
  </div>
);

Tweet.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tweet;
