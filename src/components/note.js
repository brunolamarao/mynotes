import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            noteText: null
        };
    }

    render() {
        return (
            <div className="note">
                <h2>{this.props.title}</h2>
                <div className="content">{this.props.noteText}</div>
            </div>
        );
    }
}

export default Note;