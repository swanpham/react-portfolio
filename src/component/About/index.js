import React from 'react'
import { GrMysql } from 'react-icons/gr'
import { FaGithub, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaBootstrap } from 'react-icons/fa'
import { DiMongodb, DiJavascript1, DiJqueryLogo, DiGit, DiJqueryUiLogo } from 'react-icons/di'
import { SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremiere, SiMicrosoftexcel, SiGraphql } from 'react-icons/si'
import LinkIcon from '../LinkIcon'

function About() {
    return (
      <main >
      <h1 className="about-me1">About me:</h1>
      
      <h3 id="about" className="about-me">
      Welcome to my page! My name is Swan Pham, I work as an experienced professional over 10 years in Sage ERP Accpac.
      A very self-motivated, hard-working, and ready to take on any challenge. 
      Have great communication skills and enjoy helping others in any way possible. 
      I love animals, Cooking and Traveling!
      </h3>

      <h1 className="about-me2">My Technologies:</h1>

      <div className="icon-container icon-space">
        <LinkIcon url="http://www.mysql.com">
          <GrMysql/>
        </LinkIcon>
        <LinkIcon url="https://github.com/">
          <FaGithub/>
        </LinkIcon>
        <LinkIcon url="https://reactjs.org/">
          <FaReact/>
        </LinkIcon>
        <LinkIcon url="https://en.wikipedia.org/wiki/CSS">
          <FaCss3Alt/>
        </LinkIcon>
        <LinkIcon url="https://en.wikipedia.org/wiki/HTML5">
          <FaHtml5/>
        </LinkIcon>
        <LinkIcon url="https://nodejs.org/en/">
          <FaNodeJs/>
        </LinkIcon>
        <LinkIcon url="https://getbootstrap.com/">
          <FaBootstrap/>
        </LinkIcon>
        <LinkIcon url="https://www.mongodb.com/">
          <DiMongodb/>
        </LinkIcon>
        <LinkIcon url="https://en.wikipedia.org/wiki/JavaScript">
          <DiJavascript1/>
        </LinkIcon>
        <LinkIcon url="https://jquery.com/">
          <DiJqueryLogo/>
        </LinkIcon>
        <LinkIcon url="https://git-scm.com/">
          <DiGit/>
        </LinkIcon>
        <LinkIcon url="https://jqueryui.com/">
          <DiJqueryUiLogo/>
        </LinkIcon>
        <LinkIcon url="https://www.adobe.com/ca/products/photoshopfamily.html">
          <SiAdobephotoshop/>
        </LinkIcon>
        <LinkIcon url="https://www.adobe.com/ca/products/illustrator.html">
          <SiAdobeillustrator/>
        </LinkIcon>
        <LinkIcon url="https://www.adobe.com/ca/products/aftereffects.html">
          <SiAdobeaftereffects/>
        </LinkIcon>
        <LinkIcon url="https://www.adobe.com/ca/products/premiere.html">
          <SiAdobepremiere/>
        </LinkIcon>
        <LinkIcon url="https://en.wikipedia.org/wiki/Microsoft_Excel">
          <SiMicrosoftexcel/>
        </LinkIcon>
        <LinkIcon url="https://graphql.org/">
          <SiGraphql/>
        </LinkIcon>
      </div>    
               
    </main >
    );
  }
  
  export default About;