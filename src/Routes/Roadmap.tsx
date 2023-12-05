import React from "react";
import AsymmetricBox from './AsymmetricBox';
import { NavButton } from './Button';
import { TimelineItem, Timeline } from './Timeline';
import './Timeline.css';
import css3 from '../img/css.png';
import html5 from '../img/html-5.png';
import javascriptIcon from '../img/js.png';
import reactIcon from '../img/react.png';
import python from '../img/python.png';
import php from '../img/php.png';
import mysql from '../img/mysql.png';
import unreal from '../img/unreal.png';
import cpp from '../img/cpp.png';
import bp from '../img/bp.png';
// Define types for props and state
type TimelineElementProjectsProps = {
    side: string;
    date: string;
    description: string;
    tasks: string[];
    technologies: string[];
    title: string;
};

type TimelineElementProjectsState = {
    active: boolean;
};

class TimelineElementProjects extends React.Component<TimelineElementProjectsProps, TimelineElementProjectsState> {
    state = {
        active: false
    };

    handleClick = () => {
        this.setState({
            active: !this.state.active
        });
    };

    render() {
        return (
            <TimelineItem side={this.props.side} active={this.state.active} date={this.props.date} description={this.props.description} handleClick={this.handleClick}>
                <hr className="mx-auto w-75"/>
                <h5 className='text-center'>Tasks</h5>
                <ul>
                    {this.props.tasks.map((value, index) => <li key={index}> {value} </li>)}
                </ul>
                <h5 className='text-center'>Technologies</h5>
                <div className='d-flex flex-wrap justify-content-center'>
                    {this.props.technologies.map((value, index) => (
                        <div key={index} className='p-2'>
                            <img src={value} className='technologyIcon' alt='Technology Icon'/>
                        </div> 
                    ))}
                </div>  
            </TimelineItem>
        );
    }
}

type RoadmapState = {
    date: string[];
    title: string[];
    description: string[];
    tasks: string[][];
    technologies: string[][];
};

class Roadmap extends React.Component<{}, RoadmapState> {
    state = {
      date: ['January - March 2024', 'April - June 2024', 'July - September 2024', 'October - December 2024'],
      title: ['Alpha Release on Twitch', 'Adding New Mechanics', 'Availability on Epic Launcher', 'In Progress'],
      description: [
          'Debuting the Alpha version exclusively on Twitch, inviting streamers and viewers to participate in early testing.',
          'Introducing new mechanics to enhance fun and ensure fluid gameplay, with updates based on Alpha feedback.',
          'Expanding reach by making ChatRTS available for purchase on the Epic Launcher, allowing more creators to host their own RTS battles on Twitch.',
          'Continuing development with a focus on community feedback to shape the future updates and features of ChatRTS.'
      ],
      tasks: [
          ['Initial Game Development in C++', 'Building Core Mechanics using Blueprints', 'Alpha Testing Integration with Twitch'],
          ['Adding New Gameplay Features', 'Enhancing Mechanics in Unreal Engine', 'Iterative Development Based on Alpha Feedback'],
          ['Optimization for Epic Launcher Deployment', 'Integrating Additional Distribution Channels', 'Broadening Viewer Interaction Features'],
          ['Community Feedback Incorporation', 'Ongoing Feature Development', 'Preparing Updates and Future Roadmap']
      ],
      technologies:[[unreal,cpp,bp],[unreal,cpp,bp],[unreal,cpp,bp],[unreal,cpp,bp]]
  }

    render() {
      console.log("RENDER EXECUTED!")
        var timelineElements = [];
        for (let i = 0; i < this.state.date.length; i++) {
            var sideOfContent = i % 2 === 0 ? 'left' : 'right';
            timelineElements.push(<TimelineElementProjects key={'timelineItem' + i.toString()} side={sideOfContent} date={this.state.date[i]} description={this.state.description[i]} title={this.state.title[i]} tasks={this.state.tasks[i]} technologies={this.state.technologies[i]}/>);
        }
        return (
          <div className= 'row'>
          <AsymmetricBox>
              <div className= 'row mt-3 mt-lg-0'>
                  <div className="col px-0">
                      <h3 className="text-center">Roadmap</h3>
                      <Timeline>
                          {timelineElements}
                      </Timeline>
                  </div>
              </div>
          </AsymmetricBox>
      </div>
        );
    }
}

export default Roadmap;



/*
const Roadmap = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <h1 className="text-center mb-5">ChatRTS Development Roadmap</h1>
          
          <ul className="timeline">
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow mb-4">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q1 2024 - Alpha Release on Twitch</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>January - March</span>
              <p className="text-small mt-2 font-weight-light">Debuting the Alpha version exclusively on Twitch, inviting streamers and viewers to participate in early testing.</p>
            </li>
            
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow mb-4">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q2 2024 - Adding New Mechanics</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>April - June</span>
              <p className="text-small mt-2 font-weight-light">Introducing new mechanics to enhance fun and ensure fluid gameplay, with updates based on Alpha feedback.</p>
            </li>
            
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow mb-4">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q3 2024 - Availability on Epic Launcher</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>July - September</span>
              <p className="text-small mt-2 font-weight-light">Expanding reach by making ChatRTS available for purchase on the Epic Launcher, allowing more creators to host their own RTS battles on Twitch.</p>
            </li>
            
            <li className="timeline-item bg-white rounded ml-3 p-4 shadow">
              <div className="timeline-arrow"></div>
              <h2 className="h5 mb-0">Q4 2024 - In Progress</h2>
              <span className="small text-gray"><i className="fa fa-clock-o mr-1"></i>October - December</span>
              <p className="text-small mt-2 font-weight-light">Continuing development with a focus on community feedback to shape the future updates and features of ChatRTS.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
*/