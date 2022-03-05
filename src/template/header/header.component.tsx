import React from 'react';
import './header.component.scss';

export class Header extends React.Component {
    constructor(props: any) {
        super(props);
        console.log(this);
    }

    render() {
        return (
            <div className='header'>Task manager</div>
        )
    }
}
