import React from 'react';
import './Projects.scss';
import Project from '../../components/project/Project';
import cwstatsImage from '../../assets/cwstats.png';
import heavencatImage from '../../assets/heavencat.png';
import catatonicclubImage from '../../assets/catatonicclub.png';
import vasttrafikImage from '../../assets/vasttrafik.png';
import vasttrafikMyAccountImage from '../../assets/myaccountvasttrafik.png';

const Projects: React.FC = () => {

  return (
    <div id="projects" className="projects pt-5">
      <div className="container">
        <h1 className="mb-5">Professional projects</h1>
        <div className="mb-5">
          <Project
            title="Vasttrafik.se"
            description="The main and information filled site about Västtrafik, a commuting service company located in Gothenburg, Sweden. I am a member of the development team, my role is fullstack but with a bit more focus on frontend."
            tags={['C#', 'REST Api', '.Net framework', 'Episerver', 'CMS', 'Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://vasttrafik.se"
            image={vasttrafikImage}
            index={1} />
        </div>
        <div className="mb-5">
          <Project
            title="My account on vasttrafik.se"
            description="A part of vasttrafik.se where you can find information about your registered cards. I am a member of the development team, my role is fullstack but with a bit more focus on frontend."
            tags={['C#', 'REST Api', '.Net core', 'Angular', 'Typescript', 'HTML', 'SCSS']}
            link="https://mittkonto.vasttrafik.se"
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
            image={cwstatsImage}
            index={3} />
        </div>
        <div className="mb-5">
          <Project
            title="Catatonic.club"
            description="A 3rd party website which is used with a game called Cryptokitties. Catatonic.club is used to automate a lot of tedious processes that the user otherwise has to spend a lot of time on. My part in the project has been to deliver a frontend solution both architectually and implementation wise."
            tags={['Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://catatonic.club"
            image={catatonicclubImage}
            index={4} />
        </div>
        <div className="mb-5">
          <Project
            title="Heaven.Cat"
            description="A 3rd party website which is used with a game called Cryptokitties. Heaven.cat can be used to search for cryptokitties with hidden attributes as all attributes are scraped and saved in an elasticsearch database. The site can also be used to save couples that you want to breed in the game alongside a bunch of other tools available. I've built the backend, frontend, set up Elasticsearch and Python workers to scrape the blockchain for cryptokitty data."
            tags={['C#', 'REST Api', 'ElasticSearch', '.Net Core', 'Python3.6', 'Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://heaven.cat/find?eyetype=r@0"
            image={heavencatImage}
            index={5} />
        </div>
      </div>
    </div>
  );
}

export default Projects;

