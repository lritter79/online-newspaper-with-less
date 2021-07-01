import '../styles/style.css'
import Heading from './heading'
import Navbar from './navbar'
import Subscribe from './subscribe'
import Footer from './footer'
import BoxOffice from './boxOffice'
import Articles  from './articles'

function App() {
  return (
    <div id="container">
      <div id="top">
            <Heading />
            <Navbar />                      
      </div>
      <div id="middle">
          <Articles></Articles>
          <BoxOffice></BoxOffice>
          
      </div>
      <div>
          <Subscribe />
          <Footer />
          
      </div>  
  </div>)
}

export default App;
