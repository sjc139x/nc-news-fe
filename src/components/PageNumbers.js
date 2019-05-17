import React from 'react';

function PageNumbers ({ paginateArticles }) {
    return (
        <div>
            <button onClick={e => paginateArticles(1)} className="pageButtons">1</button>
            <button onClick={e => paginateArticles(2)} className="pageButtons">2</button>
            <button onClick={e => paginateArticles(3)} className="pageButtons">3</button>
            <button onClick={e => paginateArticles(4)} className="pageButtons">4</button>
        </div>
    )
};

export default PageNumbers;