import React from 'react';

function PageNumbers ({ setPageNumber }) {
    return (
        <div>
            <button onClick={e => setPageNumber(1)} className="pageButtons">1</button>
            <button onClick={e => setPageNumber(2)} className="pageButtons">2</button>
            <button onClick={e => setPageNumber(3)} className="pageButtons">3</button>
            <button onClick={e => setPageNumber(4)} className="pageButtons">4</button>
        </div>
    )
};

export default PageNumbers;