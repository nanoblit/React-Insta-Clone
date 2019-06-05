import React from 'react';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import GlobalStyles from './styles/default';
import { AppDiv } from './styles/App';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

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
      changedData.id = uuid();
      changedData.newCommentText = '';
      for (const comment of changedData.comments) {
        const changedComment = comment;
        changedComment.id = uuid();
        changedComment.liked = false;
      }
      return changedData;
    });
    this.setState({ posts: dummyDataWithIsShown });
  }

  // SEARCH BAR CALLBACKS
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

  // LOGIN PAGE CALLBACKS

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

  // POST CONTAINER CALLBACKS
  addNewComment = (e, id) => {
    e.preventDefault();
    const newComment = {
      username: 'User',
      text: this.state.newCommentText,
      id: uuid(),
    };
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment],
      newCommentText: '',
    }));
  };

  changeNewComment = (e, id) => {
    let newPosts;
    Object.assign(newPosts, this.state.posts);

    newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        const newPost = post;
        newPost.newCommentText = e.target.value;
        return newPost;
      }
      return post;
    });

    this.setState({ newCommentText: e.target.value });
  };

  likePost = id => {
    this.setState(prevState => {
      const newLiked = !prevState.liked;
      const newLikes = newLiked ? prevState.likes + 1 : prevState.likes - 1;
      return {
        liked: newLiked,
        likes: newLikes,
      };
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
        <ComponentFromWithAuthenticate
          posts={posts}
          onSubmit={this.onLoginDataSubmit}
          username={username}
          password={password}
          onChange={this.onChange}
        />
      </AppDiv>
    );
  }
}

export default App;
