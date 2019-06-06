import React, { useState, useEffect } from 'react';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/LoginPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import GlobalStyles from './styles/default';
import { AppDiv } from './styles/App';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    let dataToDisplay = JSON.parse(localStorage.getItem('posts'));
    if (!dataToDisplay) {
      dataToDisplay = dummyData.map(data => {
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
    }
    setPosts(dataToDisplay);
  }, []);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  // SEARCH BAR CALLBACKS
  const setSearch = e => {
    e.persist();
    setPosts(
      posts.map(post => {
        const copyPost = post;
        copyPost.isShown = copyPost.username.indexOf(e.target.value) > -1;
        return copyPost;
      }),
    );
    setSearchText(e.target.value);
  };

  // LOGIN PAGE CALLBACKS
  const onLoginDataSubmit = e => {
    e.preventDefault();
    localStorage.setItem('auth', username);
    setUsername('');
    setPassword('');
  };

  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  // POST CONTAINER CALLBACKS
  const addNewComment = (e, id) => {
    e.preventDefault();
    const { newCommentText } = posts.find(post => post.id === id);

    const newComment = {
      username: localStorage.getItem('auth'),
      text: newCommentText,
      id: uuid(),
    };

    setPosts(
      posts.map(post => {
        if (post.id === id) {
          const newPost = post;
          newPost.newCommentText = '';
          newPost.comments.push(newComment);
          return newPost;
        }
        return post;
      }),
    );
  };

  const changeNewComment = (e, id) => {
    e.persist();
    setPosts(
      posts.map(post => {
        if (post.id === id) {
          const newPost = post;
          newPost.newCommentText = e.target.value;
          return newPost;
        }
        return post;
      }),
    );
  };

  const likePost = id => {
    const foundPost = posts.find(post => post.id === id);
    const newLiked = !foundPost.liked;
    const newLikes = newLiked ? foundPost.likes + 1 : foundPost.likes - 1;

    setPosts(
      posts.map(post => {
        if (post.id === id) {
          const newPost = post;
          newPost.liked = newLiked;
          newPost.likes = newLikes;
          return newPost;
        }
        return post;
      }),
    );
  };

  return (
    <AppDiv>
      <GlobalStyles />
      <SearchBar searchText={searchText} setSearch={setSearch} />
      <ComponentFromWithAuthenticate
        posts={posts}
        addNewComment={addNewComment}
        changeNewComment={changeNewComment}
        likePost={likePost}
        onSubmit={onLoginDataSubmit}
        username={username}
        password={password}
        onChangeUsername={onChangeUsername}
        onChangePassword={onChangePassword}
      />
    </AppDiv>
  );
};

export default App;
