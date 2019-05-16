import React from 'react';

function NewCommment () {
    return (
        <form className="commentSection">
            <h4>Have your say....</h4>
            <textarea className="commentBox"/>
            <button type="button" className="commentButton">COMMENT</button>
        </form>
    )
};

export default NewCommment;