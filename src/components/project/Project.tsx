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
    for (let i = 1; i <= 100; i++) {
      threshold.push(i / 100);
    }
    return threshold;
  }

  const animate = () => {
    const project = document.getElementById(projectId);
    const projectDescriptionSeparator = document.getElementById(projectId + '-separator');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0.4) {
        slideIn();
      }
      if (projectDescriptionSeparator) {
        projectDescriptionSeparator.setAttribute('style', 'width:' + entry.intersectionRatio * 100 + '%');
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
    const projectImage = document.getElementById(projectId + '-image');
    if (projectImage) {
      projectImage.classList.add('slide-in');
    }
  }

  const tagList = (): JSX.Element[] => {
    const tags: JSX.Element[] = [];
    props.tags.forEach((tag: string, index: number) => {
      tags.push(<span key={'tag-' + index} className="badge badge-pill badge-info mr-1">{tag}</span>);
    })
    return tags;
  }

  return (
    <div className="project d-flex flex-column">
      <a id={'project-' + props.index} href={props.link} className="d-flex flex-wrap flex-sm-nowrap text-dark text-decoration-none mb-3">
        <img alt="screenshot of project" id={'project-' + props.index + '-image'} className="project__image flex-shrink-1 mr-5 mb-3" src={props.image} />
        <div className="d-flex flex-column">
          <h2 className="h4">{props.title}</h2>
          <div id={'project-' + props.index + '-separator'} className="project__separator border-bottom border-dark"></div>
          <p>{props.description}</p>
          <div className="project__tags">
            <strong className="mr-1">Tags:</strong>{tagList()}
          </div>
        </div>
      </a>
      <svg height="40" viewBox="0 0 1141 181" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="curly" d="M0 84.9971C311 84.9974 178 52.9986 279 8.99706C428.773 -56.2529 592.718 323.392 687 117.997C743 -4 765 159.999 872 60.9971C969.402 -29.1241 898 60.9971 1141 60.9971" stroke="black" />
      </svg>
    </div>
  );
}

export default Project;
