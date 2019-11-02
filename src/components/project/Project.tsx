import React from 'react';
import './Project.scss';

interface IProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  index: number;
}

const Project: React.FC<IProjectProps> = (props: IProjectProps) => {
  setTimeout(() => animate(), 10);
  const projectId = 'project-' + props.index;

  const extremeThreshold = (): number[] => {
    const threshold = [0];
    for(let i = 1; i <= 100; i++) {
      threshold.push(i/100);
    }
    return threshold;
  }

  const animate = () => {
    const project = document.getElementById(projectId);
    const projectDescriptionSeparator = document.getElementById(projectId+'-separator');
    const observer = new IntersectionObserver(([entry]) => {
      //console.log('intersection ratio:', entry.intersectionRatio);
      if (entry.intersectionRatio > 0.4) {
        slideIn();
      }
      if (projectDescriptionSeparator) {
        projectDescriptionSeparator.setAttribute('style', 'width:'+entry.intersectionRatio*100+'%');
      }
    },
      {
        root: null,
        rootMargin: '0px',
        threshold: extremeThreshold(),
      });

    if (project) {
      observer.observe(project);
    }
  }

  const slideIn = () => {
    const projectImage = document.getElementById(projectId+'-image');
    if (projectImage) {
      projectImage.classList.add('slide-in');
    }
  }

  const tagList = (): JSX.Element[] => {
    const tags: JSX.Element[] = []; 
    props.tags.forEach((tag: string, index: number) => {
      tags.push(<span key={'tag-'+index} className="badge badge-pill badge-info mr-1">{tag}</span>);
    })
    return tags;
  }

  return (
    <a id={'project-' + props.index} href={props.link} className="project d-flex flex-wrap flex-sm-nowrap text-dark text-decoration-none">
      <img alt="screenshot of project" id={'project-' + props.index + '-image'} className="project__image flex-shrink-1 mr-5 mb-3" src={props.image} />
      <div className="d-flex flex-column">
        <h3>{props.title}</h3>
        <div id={'project-' + props.index + '-separator'} className="project__separator border-bottom border-dark"></div>
        <p>{props.description}</p>
        <div className="project__tags">
          <strong className="mr-1">Tags:</strong>{tagList()}
        </div>
      </div>
    </a>
  );
}

export default Project;
