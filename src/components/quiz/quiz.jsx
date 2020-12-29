import React from 'react';
import TextField from '@material-ui/core/TextField'

export default class Quiz extends React.Component {

    render() {
        return (
            <div className="background">
                <h1>
                    <TextField id="standard-basic" label="Title" />
                    <TextField id="standard-basic" label="Description" />
                </h1>
            </div>
        );
    }
}