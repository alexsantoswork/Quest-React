import React from "react";

class TitleStyling extends React.Component {
    render() {
        return (
            <div style={{color:'red', textTransform:'uppercase'}}>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default TitleStyling