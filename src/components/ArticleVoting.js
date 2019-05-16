import React from 'react';

//i tried to do this combined with comment votes but had issues with the patch
function ArticleVoting ({ loggedInUser, changeArticleVotes, article }) {
    return (
        <div>
            <h5 id="voteValue">{article.votes}</h5>
            {loggedInUser && <div>
                <button type="button" onClick={e => changeArticleVotes(1)} className="votingButtons" >YUM</button>
                <button type="button" onClick={e => changeArticleVotes(-1)} className="votingButtons" >YUCK</button>
            </div>}
        </div>
    )
};

export default ArticleVoting;