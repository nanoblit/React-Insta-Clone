import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import GlobalStyles from './styles/default';
import { AppDiv } from './styles/App';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
  state = {
    posts: [],
    searchText: '',
    username: '',
    password: '',
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

  authed = () => localStorage.getItem('auth') === 'User';

  onLoginDataSubmit = e => {
    e.preventDefault();
    localStorage.setItem('auth', this.state.username);
    this.setState({
      username: '',
      password: '',
    });
  };

  onChange = (e, which) => {
    this.setState({
      [which]: e.target.value,
    });
  };

  render() {
    const {
      posts, searchText, username, password,
    } = this.state;
    return (
      <AppDiv>
        <GlobalStyles />
        <SearchBar searchText={searchText} setSearch={this.setSearch} />
        {this.authed() ? (
          <ComponentFromWithAuthenticate posts={posts} />
        ) : (
          <LoginPage
            onSubmit={this.onLoginDataSubmit}
            username={username}
            password={password}
            onChange={this.onChange}
          />
        )}
      </AppDiv>
    );
  }
}

export default App;
