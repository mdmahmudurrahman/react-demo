import React from 'react';

import NewsListItem from './news_list_item';

const NewsList = (props) => {
  const items = props.news.map((item) => {
    return(
      <NewsListItem newsItem={item} key={item.id} />
    )
  })

  return(
    <div>
      {props.children}
      {items}
    </div>
  )
}

export default NewsList; 
