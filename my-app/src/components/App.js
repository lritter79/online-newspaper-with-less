import '../styles/style.css'
import Heading from './heading'
import Navbar from './navbar'
import Subscribe from './subscribe'
import Footer from './footer'

function App() {
  return (
    <div id="container">
      <div id="top">
            <Heading />
            <Navbar />                      
      </div>
      <div id="middle">
          <div id="articles">
              <p class="title">Today's headlines</p>
              
              <ul> 
                  <li class="article">
                      <a className="mostPopular" href>Article 1</a>
                  </li>
                  <li class="article">
                      <a href>Article 2</a>
                  </li>
                  <li class="article">
                      <a href>Article 3</a>
                  </li>
                  <li class="article">
                      <a href>Article 4</a>
                  </li>
                  <li class="article">
                      <a href>Article 5</a>
                  </li>
              </ul>          
          </div>
          <div id="boxOffice">
              <p class="title">Top 5 Films:</p>
              <ol type="I">
                  <li>Viderunt Omnes</li>
                  <li>Felix Virgo</li>
                  <li>Inviolata Genitrix</li>
                  <li>Cogito Ergo Sum</li>
                  <li>Deus Ex Machina</li>
              </ol>
          </div>
          
      </div>
      <div>
          <Subscribe />
          <Footer />
          
      </div>  
  </div>)
}

export default App;
