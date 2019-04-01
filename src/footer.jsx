import React from 'react';

export function CurrentDate() {
  let thisDay = new Date()
  let year = thisDay.getFullYear()
  return `${year}`;
};

const Footer = () => (
  <footer id="colophon" className="container">
    <div className="card-footer bg-transparent border-primary">
      NeoMorph Theme - {CurrentDate()}
    </div>
  </footer>
);

export default Footer;