import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color"title={<Link style={{textDecoration: 'none', color: 'white', fontWeight:'bold'}} to="/">Asraful Portfolio</Link>} scroll>
            <Navigation >
                
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              
            </Navigation>
        </Header>
        <Drawer id="nav-style" title={<Link style={{textDecoration: 'none', color: 'black', fontWeight:'bold'}} to="/">Asraful Portfolio</Link>}>
            <Navigation>
            <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
