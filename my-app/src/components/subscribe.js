function Subscribe (){
    return (
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
    )
}

export default Subscribe