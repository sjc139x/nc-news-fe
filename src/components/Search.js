import React from 'react';

function Search ({ sortArticles }) {
    return (
        <select onChange={e => {
            const input = e.target.value.split('/');
            sortArticles(input[0], input[1]);
        }} >
            <option value="created_at/desc">Newest to Oldest</option>
            <option value="created_at/asc">Oldest to Newest</option>
            <option value="comment_count/desc">Most Discussed</option>
            <option value="votes/desc">Most Liked</option>
        </select>
    )
};

export default Search;