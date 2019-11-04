import React, { useEffect } from 'react';
import './Projects.scss';
import Project from '../../components/project/Project';
import cwstatsImage from '../../assets/cwstats.png';
import heavencatImage from '../../assets/heavencat.png';
import catatonicclubImage from '../../assets/catatonicclub.png';
import vasttrafikImage from '../../assets/vasttrafik.png';
import vasttrafikMyAccountImage from '../../assets/myaccountvasttrafik.png';
import portfolioImage from '../../assets/portfolio.png';
import { addIntersectionObserverOn } from '../../utils/AnimationHelper';

const Projects: React.FC = () => {

  const animation = ([entry]: IntersectionObserverEntry[]) => {
    const curly3 = document.getElementById('curly3');
    const curly4 = document.getElementById('curly4');
    if (curly3 && curly4) {
      if (entry.intersectionRatio >= 0.9) {
        curly3.classList.add('dash-in');
        curly4.classList.add('dash-in');
      } else {
        curly3.classList.remove('dash-in');
        curly4.classList.remove('dash-in');
      }
    }
  }

  useEffect(() => {
    addIntersectionObserverOn('projects-header', animation);
  });

  return (
    <div id="projects" className="projects pt-5">
      <div className="container">
        <div className="d-flex flex-nowrap justify-content-between">
          <svg id="curly3svg" height="50" viewBox="0 0 764 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="curly" id="curly3" d="M0 374H296C764.8 375.6 794 190 747 103C700 16.0001 561 -22 522 16.0003C472 64.7186 473 154 522 137C556 125.204 567 95 567 74" stroke="black" />
          </svg>
          <svg height="50" viewBox="0 0 764 375" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="curly" id="curly4" d="M0 374H296C764.8 375.6 794 190 747 103C700 16.0001 561 -22 522 16.0003C472 64.7186 473 154 522 137C556 125.204 567 95 567 74" stroke="black" />
          </svg>
        </div>
        <h1 id="projects-header" className="my-5">Professional projects</h1>
        <div className="mb-5">
          <Project
            title="Vasttrafik.se"
            description="The main and information filled site about Västtrafik, a commuting service company located in Gothenburg, Sweden. I am a member of the development team, my role is fullstack but with a bit more focus on frontend."
            tags={[]}/*['C#', 'REST Api', '.Net framework', 'Episerver', 'CMS', 'Vue', 'Typescript', 'HTML', 'SCSS']}*/
            link="https://vasttrafik.se"
            github=""
            image={vasttrafikImage}
            index={1} />
        </div>
        <div className="mb-5">
          <Project
            title="My account on vasttrafik.se"
            description="A part of vasttrafik.se where you can find information about your registered cards. I am a member of the development team, my role is fullstack but with a bit more focus on frontend."
            tags={[]}/*['C#', 'REST Api', '.Net core', 'Angular', 'Typescript', 'HTML', 'SCSS']}*/
            link="https://mittkonto.vasttrafik.se"
            github=""
            image={vasttrafikMyAccountImage}
            index={2} />
        </div>
        <h1 className="mb-5">Hobby projects</h1>
        <div className="mb-5">
          <Project
            title="CWStats"
            description="A statistics website which is used with a game called Cheezewizards. CWStats shows historical duels and shows what spells a player and their wizards most commonly uses. I've built the backend and frontend of this project."
            tags={['C#', 'REST Api', '.Net Core', 'SQL', 'Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://cwstats.com"
            github="https://github.com/Storken/cwstats-repo"
            image={cwstatsImage}
            index={3} />
        </div>
        <div className="mb-5">
          <Project
            title="Portfolio website"
            description="A website where I can showcase my projects and tell a little about myself"
            tags={['React', 'Typescript', 'HTML', 'SCSS']}
            link="https://github.com/Storken/portfolio"
            github="https://github.com/Storken/portfolio"
            image={portfolioImage}
            index={4} />
        </div>
        <div className="mb-5">
          <Project
            title="Catatonic.club"
            description="A 3rd party website which is used with a game called Cryptokitties. Catatonic.club is used to automate a lot of tedious processes that the user otherwise has to spend a lot of time on. My part in the project has been to deliver a frontend solution both architectually and implementation wise."
            tags={['Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://catatonic.club"
            github=""
            image={catatonicclubImage}
            index={5} />
        </div>
        <div className="mb-5">
          <Project
            title="Heaven.Cat"
            description="A 3rd party website which is used with a game called Cryptokitties. Heaven.cat can be used to search for cryptokitties with hidden attributes as all attributes are scraped and saved in an elasticsearch database. The site can also be used to save couples that you want to breed in the game alongside a bunch of other tools available. I've built the backend, frontend, set up Elasticsearch and Python workers to scrape the blockchain for cryptokitty data."
            tags={['C#', 'REST Api', 'ElasticSearch', '.Net Core', 'Python3.6', 'Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://heaven.cat/find?eyetype=r@0"
            github=""
            image={heavencatImage}
            index={6} />
        </div>
      </div>
    </div>
  );
}

export default Projects;

