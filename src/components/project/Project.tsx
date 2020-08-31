import React, { useEffect } from 'react';
import './Project.css';
import githubImage from '../../assets/GitHub-Mark-120px-plus.png';
import '../../utils/AnimationHelper';
import { addIntersectionObserverOn } from '../../utils/AnimationHelper';

interface IProjectProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github: string;
  image: string;
  index: number;
}

const Project: React.FC<IProjectProps> = (props: IProjectProps) => {
  const projectId = 'project-' + props.index;

  const animation = ([entry]: IntersectionObserverEntry[]) => {
    const projectDescriptionSeparator = document.getElementById(projectId + '-separator');
    if (entry.intersectionRatio > 0.7) {
      slideIn();
    }
    if (projectDescriptionSeparator) {
      projectDescriptionSeparator.setAttribute('style', 'width:' + entry.intersectionRatio * 100 + '%');
    }
  }

  const slideIn = () => {
    const projectImage = document.getElementById(projectId + '-image');
    if (projectImage) {
      projectImage.classList.add('slide-in');
    }
  }

  const tagList = (): JSX.Element => {
    const tags: JSX.Element[] = [];
    props.tags.forEach((tag: string, index: number) => {
      tags.push(<span key={'tag-' + index} className="badge badge-pill badge-info mr-1">{tag}</span>);
    });
    if (tags.length) {
      return <div className="project__tags"><strong className="mr-1">Tags:</strong>{tags}</div>;
    } else {
      return <div></div>;
    }
  }

  const repo = (): JSX.Element => {
    if (props.github === '') {
      return <span></span>;
    }
    return <a className="text-dark text-decoration-none" href={props.github}>code: <img alt="github link for this project" src={githubImage} width="20" height="20" /></a>
  }

  useEffect(() => {
    addIntersectionObserverOn(projectId, animation);
  });

  return (
    <div className="project d-flex flex-column">
      <div id={'project-' + props.index} className="d-flex flex-wrap flex-lg-nowrap text-dark text-decoration-none align-items-start">
        <a id={'project-' + props.index + '-image'} className="project__image mr-lg-5 mb-3 mb-lg-0 d-block w-100 shadow" href={props.link}>
          <img alt="screenshot of project" src={props.image} />
        </a>
        <div className="d-flex flex-column w-100">
          <h2 className="h4 w-100 d-flex justify-content-between flex-nowrap"><a className="text-dark text-decoration-none" href={props.link}>{props.title}</a><small>{repo()}</small></h2>
          <div id={'project-' + props.index + '-separator'} className="project__separator border-bottom border-dark"></div>
          <p>{props.description}</p>
          {tagList()}
        </div>
      </div>
    </div>
  );
}

export default Project;
