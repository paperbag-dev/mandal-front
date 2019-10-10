import React from 'react';

import TestComponentOne from 'components/TestComponentOne';

import './style/Main.scss';

export default class Main extends React.Component {
    render() {
        return (
            <div className={"page-wrapper"}>
                <h1 className={"page-title"}>main page</h1>
                <div className={"component-wrapper"}>
                    <div className={"item"}><TestComponentOne /></div>
                    <div className={"item"}><TestComponentOne /></div>
                    <div className={"item"}><TestComponentOne /></div>
                    <div className={"item"}><TestComponentOne /></div>
                </div>
            </div>
        )
    }
}
