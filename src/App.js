import React from 'react';
import Navbar from './component/Navbar';
import Content from './component/Content'
import Sidebar from './component/Sidebar'
import Footer from './component/Footer'

const App = () => {
  return (
  		<div>
			<Navbar/>
  			<Content/>
  			<Sidebar/>
			<Footer/>
  		</div>
  	)
}

export default App;
