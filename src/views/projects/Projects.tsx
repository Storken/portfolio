import React, { useEffect } from 'react';
import './Projects.css';
import '../../styles/svgs.css';
import Project from '../../components/project/Project';
import cwstatsImage from '../../assets/cwstats.png';
import heavencatImage from '../../assets/heavencat.png';
import catatonicclubImage from '../../assets/catatonicclub.png';
import vasttrafikImage from '../../assets/vasttrafik.png';
import vasttrafikMyAccountImage from '../../assets/myaccountvasttrafik.png';
import portfolioImage from '../../assets/portfolio2.png';
import sendifyImage from '../../assets/sendify.png';
import { addIntersectionObserverOn } from '../../utils/AnimationHelper';
import CarWagon from '../../components/car-wagon/CarWagon';
import CoolSeparator from '../../components/cool-separator/CoolSeparator';

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

  const treeAnimation = ([entry]: IntersectionObserverEntry[]) => {
    const curlyTree = document.getElementById('curly-tree');
    const curlyTreeMobile = document.getElementById('curly-tree-mobile');
    if (curlyTree && curlyTreeMobile) {
      if (entry.intersectionRatio > 0.05) {
        curlyTree.classList.add('dash-in');
        curlyTreeMobile.classList.add('dash-in');
      }
      else {
        curlyTree.classList.remove('dash-in');
        curlyTreeMobile.classList.remove('dash-in');
      }
    }
  }

  useEffect(() => {
    addIntersectionObserverOn('projects', treeAnimation);
    addIntersectionObserverOn('projects-header', animation);
  });

  return (
    <div id="projects" className="projects">
      <div className="container">
        <div id="tree-wrapper" className="pb-5">
          <svg className="tree d-sm-none" viewBox="0 0 16639 4122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="curly-tree-mobile" className="curly curly--tree mobile" d="M7040.5 2583C7563.5 2892 8195.5 4202 6023 4110.5C5660.5 4095.23 5500.5 3965.5 5196 3923C4891.5 3880.5 4786.54 4078.65 4488 4110.5C4189.46 4142.35 4047.5 3923 3761 3923C3474.5 3923 3513.5 4069 3116.5 4110.5C2719.5 4152 2820.5 4026 2403 4026H0.5M7870.5 2746C7829.5 2925.5 7910 2963.5 7959.5 3076C7990.5 2967.5 8195.5 2849 8195.5 2704M8607 2746C7940.5 3296.5 7998.09 4050.57 9345 4110.5C9816.5 4131.48 9939.5 3961.5 10315.5 3923C10691.5 3884.5 10787.5 4072 11292 4110.5C11796.5 4149 11751.5 3923 12137 3923C12522.5 3923 12687 4110.5 13034.5 4110.5C13382 4110.5 13272 4026 13839.5 4026H16638.5M7574 4110.5C7870.5 4026 7731.5 3923 7870.5 3681.5M6810 1810C6893.69 1647.18 6962.2 1596.07 7168.5 1661.5M7168.5 1008C7365.4 922.04 7456.92 932.161 7574 1093M8320 1329C8387.07 1090.65 8441.99 976.836 8744.5 1008M7310.5 2425C7084.41 2593.45 6937.72 2623.54 6634 2536.5C6338.5 2602 6159 2295.5 6286.5 2139.5C6064 2127.5 5937.5 1756.5 6131 1661.5C5863.5 1532.5 5975.5 1225.5 6205.5 1152.5C6038 900.998 6262.5 525.999 6522 593.999C6497 377.499 6757.5 214.999 6931.5 327.499C6938 18.9981 7433.5 -16.5021 7490 178.499C7710 -135.501 8185 8 8185 327.499C8185 4.5 8512.5 -43 8607 178.499C8784.5 -121.5 9243.5 178.499 9110 389.499C9332.5 274.5 9688 593.999 9432.5 773.999C9700 773.999 9832 1152.5 9488.5 1258C9892 1258 9892 1661.5 9625 1748.5C9940 1748.5 9826 2383.5 9544.5 2220C9814 2536.5 9267.5 2828 9079 2505.5C9079 2930 8402.5 2744 8402.5 2425C8402.5 2714 8144.5 2744 8079.5 2536.5C8024.5 2768 7382 2786 7310.5 2425Z" />
          </svg>
          <svg className="tree d-none d-sm-block" viewBox="0 0 32768 3559" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="curly-tree" className="curly curly--tree" d="M15301.5 2229.65C15753 2496.38 16298.5 3627.17 14423.2 3548.19C14110.3 3535.01 13972.2 3423.03 13709.4 3386.34C13446.5 3349.65 13355.9 3520.7 13098.2 3548.19C12840.5 3575.68 12718 3386.34 12470.7 3386.34C12223.4 3386.34 12257 3512.37 11914.3 3548.19C11571.7 3584.01 11658.8 3475.25 11298.4 3475.25H0.431601M16018 2370.35C15982.6 2525.3 16052.1 2558.1 16094.8 2655.21C16121.6 2561.55 16298.5 2459.26 16298.5 2334.1M16653.8 2370.35C16078.4 2845.54 16128.1 3496.46 17290.8 3548.19C17697.8 3566.3 17804 3419.57 18128.5 3386.34C18453.1 3353.11 18536 3514.96 18971.4 3548.19C19406.9 3581.42 19368.1 3386.34 19700.9 3386.34C20033.6 3386.34 20175.6 3548.19 20475.6 3548.19C20775.5 3548.19 20680.6 3475.25 21170.5 3475.25H23586.6H32767.6M15762.1 3548.19C16018 3475.25 15898 3386.34 16018 3177.88M15102.6 1562.4C15174.8 1421.85 15234 1377.73 15412 1434.21M15412 870.107C15582 795.906 15661 804.643 15762.1 943.479M16406 1147.2C16463.9 941.449 16511.3 843.206 16772.4 870.107M15534.6 2093.26C15339.4 2238.67 15212.8 2264.64 14950.7 2189.51C14695.6 2246.05 14540.6 1981.48 14650.7 1846.82C14458.6 1836.46 14349.4 1516.21 14516.5 1434.21C14285.6 1322.86 14382.2 1057.85 14580.8 994.839C14436.2 777.743 14630 454.043 14854 512.741C14832.4 325.858 15057.3 185.587 15207.5 282.697C15213.1 16.3992 15640.8 -14.2446 15689.6 154.08C15879.5 -116.965 16289.5 6.90561 16289.5 282.697C16289.5 3.88441 16572.2 -37.1177 16653.8 154.08C16807 -104.879 17203.2 154.08 17087.9 336.216C17280 236.949 17586.9 512.741 17366.3 668.117C17597.2 668.117 17711.2 994.839 17414.7 1085.91C17763 1085.91 17763 1434.21 17532.5 1509.31C17804.4 1509.31 17706 2057.44 17463 1916.31C17695.6 2189.51 17223.9 2441.13 17061.2 2162.75C17061.2 2529.18 16477.2 2368.63 16477.2 2093.26C16477.2 2342.73 16254.5 2368.63 16198.4 2189.51C16150.9 2389.34 15596.3 2404.88 15534.6 2093.26Z" />
          </svg>
        </div>
        <h1 id="projects-header" className="mb-5">Professional projects</h1>
        <Project
          title="Vasttrafik.se"
          description="The main and information filled site about Västtrafik, a commuting service company located in Gothenburg, Sweden. I am a member of the development team, my role is fullstack but with a bit more focus on frontend."
          tags={[]}/*['C#', 'REST Api', '.Net framework', 'Episerver', 'CMS', 'Vue', 'Typescript', 'HTML', 'SCSS']}*/
          link="https://vasttrafik.se"
          github=""
          image={vasttrafikImage}
          index={1} />
        <div className="my-3">
          <CoolSeparator />
        </div>
        <Project
          title="My account on vasttrafik.se"
          description="A part of vasttrafik.se where you can find information about your registered cards. I am a member of the development team, my role is fullstack but with a bit more focus on frontend."
          tags={[]}/*['C#', 'REST Api', '.Net core', 'Angular', 'Typescript', 'HTML', 'SCSS']}*/
          link="https://mittkonto.vasttrafik.se"
          github=""
          image={vasttrafikMyAccountImage}
          index={2} />
        <div className="my-3">
          <CoolSeparator />
        </div>
        <div className="mb-5">
          <Project
            title="Sendify"
            description="A company making it easier for small businesses to order freight services. I'm currently a part of their frontend team, building on their frontend application."
            tags={[]}
            link="https://sendify.se"
            github=""
            image={sendifyImage}
            index={3} />
        </div>
        <CarWagon />
        <div className="mt-5" id="hobby-projects">
          <h1 className="mb-5">Hobby projects</h1>
          <Project
            title="Heaven.cat"
            description="I built this web application (heaven.cat) for a blockchain-game called Cryptokitties (cryptokitties.co) where you collect and breed kitties. The main purpose of the web application is to help the user find specific cats. The system was built with Elasticsearch in the bottom, serving as the database for both userdata and cryptocatdata. The cryptocatdata was scraped from the ethereum blockchain using python-workers. A REST-API built in Dotnet Core v2.1 was built on top of the DB which serves clean and simple models to the frontend, using JSON. The frontend was built with Vue, including typescript, html and scss. "
            tags={['C#', 'REST Api', 'ElasticSearch', '.Net Core', 'Python3.6', 'Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://heaven.cat/find?eyetype=r@0"
            github=""
            image={heavencatImage}
            index={7} />
          <div className="my-3">
            <CoolSeparator />
          </div>
          <Project
            title="Portfolio website"
            description="A website where I can showcase my projects and tell a little about myself. There's a substantial amount of SVG, which I manipulate using css keyframes. They are all created from scratch by me as well."
            tags={['React', 'Typescript', 'HTML', 'SCSS', 'SVG']}
            link="https://junghard.com/"
            github="https://github.com/Storken/portfolio"
            image={portfolioImage}
            index={5} />
          <div className="my-3">
            <CoolSeparator />
          </div>
          <Project
            title="Catatonic.club"
            description="A 3rd party website which is used with a game called Cryptokitties. Catatonic.club is used to automate a lot of tedious processes that the user otherwise has to spend a lot of time on. My part in the project has been to deliver a frontend solution both architectually and implementation wise."
            tags={['Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://catatonic.club"
            github=""
            image={catatonicclubImage}
            index={6} />
          <div className="my-3">
            <CoolSeparator />
          </div>
          <Project
            title="CWStats"
            description="During a Hackathon for a blockchain-game called CheezeWizards (cheezewizards.com) I built a web application called CWStats (cwstats.com). The main purpose of the webapp is to serve the user with information about other wizards so he/she can decide who to duel and what spells they should use in such a duel. The system was built with a REST API in .Net core v2.2.7 which serves the data from a CosmosDB to the frontend in clean and simple models using JSON. The frontend was built with Vue including typescript, html, scss."
            tags={['C#', 'REST Api', '.Net Core', 'SQL', 'Vue', 'Typescript', 'HTML', 'SCSS']}
            link="https://cwstats.com"
            github="https://github.com/Storken/cwstats-repo"
            image={cwstatsImage}
            index={4} />
        </div>
      </div>
    </div>
  );
}

export default Projects;

