import React from "react";
import './AsymmetricBox.css';

// Define a type for the props
type AsymmetricBoxProps = {
    children?: React.ReactNode;
}

class AsymmetricBox extends React.Component<AsymmetricBoxProps> {
    render() {
        return (
            <div className="asymmetric-container bg-white">
                <div className="blank-space1 bg-white"></div>
                <div className="assymetric px-sm-0 p-lg-3">
                    {this.props.children}
                </div>
                <div className="blank-space2 bg-white"></div>
            </div>
        );
    }
}

export default AsymmetricBox;
