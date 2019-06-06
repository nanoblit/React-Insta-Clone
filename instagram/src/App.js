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
      changedData.liked = false;
      for (const comment of changedData.comments) {
        const changedComment = comment;
        changedComment.id = uuid();
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

    const { posts } = this.state;
    const { newCommentText } = posts.find(post => post.id === id);

    const newComment = {
      username: 'User',
      text: newCommentText,
      id: uuid(),
    };

    this.setState(prevState => ({
      posts: prevState.posts.map(post => {
        if (post.id === id) {
          const newPost = post;
          newPost.newCommentText = '';
          newPost.comments.push(newComment);
          return newPost;
        }
        return post;
      }),
    }));
  };

  changeNewComment = (e, id) => {
    e.persist();
    this.setState(prevState => ({
      posts: prevState.posts.map(post => {
        if (post.id === id) {
          const newPost = post;
          newPost.newCommentText = e.target.value;
          return newPost;
        }
        return post;
      }),
    }));
  };

  likePost = id => {
    this.setState(prevState => {
      const foundPost = prevState.posts.find(post => post.id === id);
      const newLiked = !foundPost.liked;
      const newLikes = newLiked ? foundPost.likes + 1 : foundPost.likes - 1;
      return {
        posts: prevState.posts.map(post => {
          if (post.id === id) {
            const newPost = post;
            newPost.liked = newLiked;
            newPost.likes = newLikes;
            return newPost;
          }
          return post;
        }),
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
          addNewComment={this.addNewComment}
          changeNewComment={this.changeNewComment}
          likePost={this.likePost}
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
