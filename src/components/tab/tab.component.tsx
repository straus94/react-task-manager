import React from "react";
import './tab.component.scss'

export class Tab extends React.Component<any, any> {
    // constructor(props: any) {
    //     super(props);
    //     console.log(this);
    //     this.props = props;
    // }

    render() {
        return (
            <div className="tab">
                <div className="tab__wrapper">
                    <div className="tab__title">{this.props.title}</div>    
                </div>    
            </div>
        );
    }
}