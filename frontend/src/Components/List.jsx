import React from 'react';

const List = ({listElements, usingListID, listid}) => 
(
    <ul id={usingListID ? listid : ""}>
    {
        listElements.map(element => 
            <li>{element}</li>)
    }

    </ul>
);
    
export default List;
        