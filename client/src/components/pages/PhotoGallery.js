import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../layouts/Header';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';
import Articles from '../layouts/Articles';
import Article from '../layouts/Article';
import EditArticle from '../layouts/EditArticle';
import AddArticle from '../layouts/AddArticle';

function PhotoGallery() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('/articles')
      .then((res) => setPosts(res.data))
      .catch(error => console.log(error));
  }, [posts])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Route exact path='/' render={() => <Articles posts={posts} />} />
      
{/* displays each article */}

      <Route 
        path='/article/:id' 
        render={(props) => <Article {...props} posts={posts} />} 
      />

{/* Update article button? */}
      <Route 
        path='/update/:id' 
        render={(props) => <EditArticle {...props} posts={posts} />} 
      />

{/* Add article button */}
      <Route path='/add-article' component={AddArticle} />

  
      <Route path='/photogallery' component={PhotoGallery} />

      <Footer />
    </div>
  );
}

export default PhotoGallery;
