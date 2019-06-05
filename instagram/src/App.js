import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import GlobalStyles from './styles/default';
import { AppDiv } from './styles/App';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

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
        <ComponentFromWithAuthenticate posts={posts} />
      </AppDiv>
    );
  }
}

export default App;
