import React from 'react';

import {Link, Switch, Route} from 'react-router-dom';


const alphabet = [
    {
        id:1,
        name:"A"
    },
    {
        id:2,
        name:"B"
    },
    {
        id:3,
        name:"C"
    },
    {
        id:4,
        name:"D"
    }
]
const Messages = (match:any) => (
    <div>
        <ul>
            {
                alphabet.map(letter => {
                    return <li key={letter.id}>
                        <Link to={`${match.url}/${letter.id}`}>
                            Message {letter.name}
                        </Link>
                    </li>;
                })
            }
        </ul>
        <Switch>
          {/*  <Route path={`${match.url}/:id(\\d+)`} component={Messages} />*/}
{/*            <Route
                path={match.url}
                render={() => <h3>Please select a message</h3>}
            />*/}
        </Switch>
    </div>
);


export default Messages;