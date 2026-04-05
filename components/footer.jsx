import React from 'react'
import FooterForm from './sections/footerFormSection';
import FooterLinks from './sections/footerLinksSection';
import MapSection from './ui/googleMaps';

const Footer = () => {
  return (
    
      <footer>
        <FooterForm/>
        <MapSection/>
        <FooterLinks/>
      </footer>
    
  )
}

export default Footer
