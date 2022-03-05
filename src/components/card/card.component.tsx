import React from "react";
import { Note } from "../../interfaces/note.interface";

export class Card extends React.Component<Note, any> {

    render() {
        return (
            <div className="card">
                <div className="card__wrapper">
                    <div className="card__type">{this.props.type}</div>
                    <div className="card__title">{this.props.title}</div>
                    <div className="card__date">
                        <div className="card__calendar">calnedar</div>
                        <div className="card__time">time</div>
                    </div>
                    <div className="card__choose card__choose--active"></div>
                </div>
            </div>
        );
    }
}