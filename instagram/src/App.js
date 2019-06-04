import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import GlobalStyles from './styles/default';
import { AppDiv } from './styles/App';

class App extends React.Component {
  state = {
    posts: [],
    searchText: '',
  };

  componentDidMount() {
    const dummyDataWithIsShown = dummyData.map(data => {
      const changedData = data;
      changedData.isShown = true;
      return changedData;
    });
    this.setState({ posts: dummyDataWithIsShown });
  }

  setSearch = e => {
    e.persist();
    this.setState(prevState => ({
      posts: prevState.posts.map(post => {
        const copyPost = post;
        copyPost.isShown = copyPost.username.indexOf(e.target.value) > -1;
        return copyPost;
      }),
      searchText: e.target.value,
    }));
  };

  render() {
    const { posts, searchText } = this.state;
    return (
      <AppDiv>
        <GlobalStyles />
        <SearchBar searchText={searchText} setSearch={this.setSearch} />
        {posts.filter(({ isShown }) => isShown).map(({
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
      </AppDiv>
    );
  }
}

export default App;
