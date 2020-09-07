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
            <div className="col s12 m3">
                <div className="card hoverable brown lighten-5">
                    <div className="card-content">
                        <span className="card-title"><h4>{this.props.title}</h4></span>
                        <p>{this.props.noteText}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;