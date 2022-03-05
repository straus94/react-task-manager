import React from "react";
import './search.component.scss';
// import searchIcon from ''

export class Search extends React.Component {
    
    constructor(props: any) {
        super(props);
    }

    openSearch(): void {
        console.log(`1`);
    }

    render() {
        return (
            <div className="search">
                <div className="search__hello">
                    <div className="search__dear">Good morning Den</div>    
                    <div className="search__title">Here`s today`s events</div>    
                </div>
                <button className="search__icon" onClick={this.openSearch}>
                    <img src={process.env.PUBLIC_URL + 'search.png'} />
                </button>
            </div>
        )
    }

}