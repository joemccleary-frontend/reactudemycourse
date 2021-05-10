import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="logo" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Tom
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Yesterday at 5.02pm
                        </span>
                    </div>
                    <div className="text">Nice ball shane</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="logo" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Tom
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Yesterday at 5.02pm
                        </span>
                    </div>
                    <div className="text">Nice ball shane</div>
                </div>
            </div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="logo" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Tom
                    </a>
                    <div className="metadata">
                        <span className="date">
                            Yesterday at 5.02pm
                        </span>
                    </div>
                    <div className="text">Nice ball shane</div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root') )