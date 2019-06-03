import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import GlobalStyles from './styles/default';

function App() {
  return (
    <div>
      <GlobalStyles />
      <SearchBar />
      {dummyData.map(({
        username, thumbnailUrl, imageUrl, likes, timestamp, comments,
      }, idx) => (
        <PostContainer
          key={idx}
          username={username}
          thumbnailUrl={thumbnailUrl}
          imageUrl={imageUrl}
          likes={likes}
          timestamp={timestamp}
          comments={comments}
        />
      ))}
    </div>
  );
}

export default App;
