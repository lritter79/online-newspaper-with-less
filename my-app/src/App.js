import './styles/style.css'
import Heading from './heading'

function App() {
  return (
    <div id="container">
      <div id="top">
          <Heading />
          <div id="navbar">
              <nav>
                      <a id="home" href="index.html">
                          Domum
                      </a>
                      <a class="navLink" href>
                          Ludis
                      </a>
                      <a class="navLink" href>
                          Imperatoria
                      </a>
                      <a class="navLink" href>
                          Senatus
                      </a>
                      <a class="navLink" href>
                          Cibus
                      </a>
                      <a class="navLink" href>
                          Religio
                      </a>
              </nav> 
          </div>                           
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
          <div id="subscribe">
              <h3 id="subRequest">Subscribe to our newsletter</h3>
              <p>Choose a subscription type:</p>
              <div id="subTypes">
                  <span class="subType">
                      <input type="checkbox" id="weekly" /> 
                      <label for="weekly">Weekly</label>
                  </span>
                  <br/>
                  <span class="subType">
                      <input type="checkbox" id="daily" /> 
                      <label for="daily">Daily</label>
                  </span>
              </div>  
              <button id="btnSubscribe">
                  Subscribe
              </button>      
          </div>
      </div>
      <div id="bottom">
          
          <div id="footer">
              <nav>
                  <a class="navLinkBottom" href="/">
                      Domum
                  </a>
                  <a class="navLinkBottom" href="/about">
                      About
                  </a>
                  <a class="navLinkBottom" href>
                      Contact
                  </a>
              </nav> 
          </div>
          <span id="disclaimer">
              This is not a real news site. This is just a page I wrote to practice LESS with © 2021 Levon Ritter
          </span>
      </div>  
  </div>)
}

export default App;
