import React, { useEffect } from 'react';
import './NameTag.css';
import portrait from '../../assets/magnus.png';
import linkedinLogo from '../../assets/LI-In-Bug.png';
import githubLogo from '../../assets/GitHub-Mark-120px-plus.png';

const NameTag: React.FC = () => {
  const email = 'm1a2g3n4u5s@j9u8n7g6h5a4r3d.c2o1m'

  const setEmailAddress = () => {
    const emailLink: HTMLAnchorElement = document.getElementById('contact-me') as HTMLAnchorElement;
    if (emailLink) {
      emailLink.innerText = email.replace(new RegExp("[0-9]", "g"), '');
    }
  }

  useEffect(() => {
    setEmailAddress();
  });

  return (
    <div className="name-tag border shadow-sm rounded-lg d-inline-flex flex-no-wrap p-3 bg-white">
      <img src={portrait} className="name-tag__portrait" width="100" height="100" alt="self portrait" />
      <div className="d-flex flex-column justify-content-between ml-3 py-2 text-left">
        <div className="font-weight-bold">Magnus Junghard Huttu</div>
        <div>Fullstack developer</div>
        <a target="_blank" rel="noopener noreferrer" href="mailto:magnus@junghard.com" id="contact-me" className="contact-me">email</a>
        <div>
          <a href="https://www.linkedin.com/in/magnushuttu/"
            className="mr-2"
          ><img src={linkedinLogo} height="15" alt="linkedin profile"></img></a>
          <a href="https://github.com/Storken"
            className="mr-2"
          ><img src={githubLogo} height="15" alt="github profile"></img></a>
        </div>
      </div>
    </div>
  );
}

export default NameTag;


