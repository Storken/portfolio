import React from 'react';
import './NameTag.scss';
import portrait from '../../assets/magnus.png';
import linkedinLogo from '../../assets/LI-In-Bug.png';
import githubLogo from '../../assets/GitHub-Mark-120px-plus.png';

const NameTag: React.FC = () => {
  setTimeout(() => setEmailAddress(), 10);
  const email = 'm1a2g3n4u5s@j9u8n7g6h5a4r3d.c2o1m'

  const setEmailAddress = () => {
    const emailLink: HTMLAnchorElement = document.getElementById('contact-me') as HTMLAnchorElement;
    if (emailLink) {
      emailLink.innerText = email.replace(new RegExp("[0-9]", "g"), '');
    }
  }

  return (
    <div className="name-tag border shadow-sm rounded-lg d-inline-flex flex-no-wrap p-3 bg-white">
        <img src={portrait} className="name-tag__portrait" width="100" alt="self portrait" />
        <div className="d-flex flex-column ml-3 text-left">
            <div className="font-weight-bold mb-1">Magnus Junghard Huttu</div>
            <div className="mb-1">Fullstack developer</div>
            <a target="_blank" rel="noopener noreferrer" href="mailto:magnus@junghard.com" id="contact-me" className="contact-me mb-1">email</a>
            <div>
            <a href="https://www.linkedin.com/in/magnus-huttu-4a0792b1/"
                className="mb-1 mr-2"
                ><img src={linkedinLogo} height="15" alt="linkedin profile"></img></a>
            <a href="https://github.com/Storken"
                className="mb-1 mr-2"
                ><img src={githubLogo} height="15" alt="github profile"></img></a>
            </div>
        </div>
    </div>
  );
}

export default NameTag;


