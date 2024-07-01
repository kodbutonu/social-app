import React from 'react';
import Topbar from '../../components/topbar/topbar';
import Siderbar from '../../components/sidebar/Siderbar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/rightbar';
import "./home.css"
function Home() {
  return (
    <>
     <Topbar/>
      <div className='homeContainer'>
     <Siderbar/>
     <Feed/>
     <Rightbar/>
      </div>
     </>
   
  );
}

export default Home;
