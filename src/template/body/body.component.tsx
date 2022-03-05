import React from "react";
import { Search } from "../../components/search/search.component";
import { Tab } from "../../components/tab/tab.component";
import './body.component.scss';

export class Body extends React.Component {

    tabs = [
        {
            title: 'Past'
        },
        {
            title: 'Today'
        },
        {
            title: 'Upcoming'
        }
    ];

    constructor(props: any) {
        super(props);
    }

    render() {
        // const tabs = [];
        // for (let i of this.tabs) {
        //     tabs.push(<Tab />);
        // } 
        // = this.tabs.map(t => {
        //     console.log(t);
        //     return <Tab />
        // });
        // console.log(tabs);

        return (
            <div className="content">
                <Search />
                <div className="content__tabs">
                    {/* <div className="content__tab"> */}
                        {this.tabs.map((t, i) => {
                            return <Tab {...t} key={i} />;
                        })}
                    {/* </div> */}
                </div>
                <div className="content__cards"></div>  
            </div>
        );
    }
}