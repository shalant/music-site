import React, {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/layouts/Articles';
import Article from './components/layouts/Article';
import EditArticle from './components/layouts/EditArticle';
import AddArticle from './components/layouts/AddArticle';
import PhotoGallery from './components/pages/PhotoGallery';

function App() {
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

export default App;
