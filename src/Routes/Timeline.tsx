import React from 'react';
import { DropdownButton } from './Button';

// Define a type for the props of TimelineItem
type TimelineItemProps = {
    side: string;
    date: string;
    description: string;
    active: boolean;
    handleClick: () => void;
    children?: React.ReactNode;
}

class TimelineItem extends React.Component<TimelineItemProps> {
    render() {
        return (
            <div className={"inner-container " + this.props.side}>
                <div className="content">
                    <h3 className="text-center">{this.props.date}</h3>
                    <p className="text-center">{this.props.description}</p>
                    <hr className="mx-auto w-75"/>
                    <div key='dropdownBtnContainer' className='d-flex justify-content-center'>
                        <DropdownButton active={this.props.active} text="Details" handleClick={this.props.handleClick}/>
                    </div>
                    <div key='hiddenContent' className={"hidden-content" +(this.props.active ? ' active':'')}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

// No props for Timeline, but still define an empty type for consistency
type TimelineProps = {
    children?: React.ReactNode;
}

class Timeline extends React.Component<TimelineProps> {
    render() {
        return (
            <div className="timeline-container">
                <div className="timeline">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export { TimelineItem, Timeline };