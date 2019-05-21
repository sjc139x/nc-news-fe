import React from 'react';

function PageNumbers ({ paginateArticles }) {
    return (
        <div>
            <button onClick={e => paginateArticles(1)} className="PageNumbers-Buttons">1</button>
            <button onClick={e => paginateArticles(2)} className="PageNumbers-Buttons">2</button>
            <button onClick={e => paginateArticles(3)} className="PageNumbers-Buttons">3</button>
            <button onClick={e => paginateArticles(4)} className="PageNumbers-Buttons">4</button>
        </div>
    )
};

export default PageNumbers;