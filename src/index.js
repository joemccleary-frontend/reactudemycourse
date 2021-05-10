import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'

const App = () => {
    return (
        <div className="ui container comments">
            <div>
                <CommentDetail 
                    author="Dave"
                    time="Today at 05.30"
                    message="Howdy"
                />
                <CommentDetail 
                    author="Sam"
                    time="Today at 07.31"
                    message="Gooday mate"
                />
                <CommentDetail 
                    author="Daniel"
                    time="Today at 15.20"
                    message="Good morrow"
                />
            </div>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root') )