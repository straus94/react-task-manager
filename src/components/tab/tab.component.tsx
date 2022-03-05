import React from "react";
import { TabInterface } from "../../interfaces/tab.interface";
import './tab.component.scss'

export class Tab extends React.Component<TabInterface, any> {
    // constructor(props: any) {
    //     super(props);
    //     console.log(this);
    //     this.props = props;
    // }

    render() {
        console.log(this.props);
        return (
            <div className="tab">
                <div className="tab__wrapper">
                    <div className="tab__title">{this.props.title}</div>    
                </div>    
            </div>
        );
    }
}