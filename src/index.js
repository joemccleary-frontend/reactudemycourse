import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Dave"
                    time="Today at 05.30"
                    message="Howdy"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    time="Today at 07.31"
                    message="Gooday mate"
                    avatar={faker.image.avatar()}

                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Daniel"
                    time="Today at 15.20"
                    message="Good morrow"
                    avatar={faker.image.avatar()}

                />
            </ApprovalCard>          
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root') )