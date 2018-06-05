import React from 'react';

const NewsListItem = (props) => {
  return(
    <div>
      <h3>{props.newsItem.title}</h3>
      <p>{props.newsItem.feed}</p>
    </div>
  )
}

export default NewsListItem;