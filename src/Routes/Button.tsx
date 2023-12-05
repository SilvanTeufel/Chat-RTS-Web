import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Arrow } from '../img/up-arrow.svg';
import './Button.css';

// Define a type for the props of DropdownButton
type DropdownButtonProps = {
    active: boolean;
    handleClick: () => void;
    text: string;
}

class DropdownButton extends React.Component<DropdownButtonProps> {
    render() {
        return (
            <button className={'bg-transparent border-0 p-2 dropdown' + (this.props.active ? ' active' : '')} onClick={this.props.handleClick}>
                <span>{this.props.text}</span>
                <span className={'dropdown-img'}><Arrow /></span>
            </button>
        );
    }
}

// Define a type for the props of NavButton
type NavButtonProps = {
    href: string;
    children?: React.ReactNode;
}

class NavButton extends React.Component<NavButtonProps> {
    render() {
        return (
            <NavLink className="btn btn-red" to={this.props.href}>{this.props.children}</NavLink>
        );
    }
}

export { NavButton, DropdownButton };