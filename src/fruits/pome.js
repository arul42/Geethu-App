import React from 'react';
import '../App.css';

const Red = (props) =>
{
    return(
        <div className ='App'>
            <p> the different varieties {props.name} from different countries at {props.price}</p>
        </div>
    )
}
export default Red;