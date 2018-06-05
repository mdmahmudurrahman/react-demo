import React from 'react';
import { css } from 'glamor';

const NewsListItem = (props) => {

  let newsItem = css({
    padding: '20px',
    boxSizing: 'border-box',
    borderBottom: '1px solid grey'
  }) 

  return(
    <div {...newsItem}>
      <h3>{props.newsItem.title}</h3>
      <p>{props.newsItem.feed}</p>
    </div>
  )
} 

export default NewsListItem;