import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {/* children refers to 'type=submit' */}
    {children}
  </button>
);

export default CustomButton;
