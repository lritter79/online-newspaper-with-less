import { ArticleList } from "../data/articles.js";


function Articles() {
  return (
    <div id="articles" style={{display:"flex"}}>
      {ArticleList.map((data, key) => {
          return (
            <div className="article" style={{display:"flex"}}>
                <img src={"images/stock_photos/" + data.img} style={{width:"100px", maxHeight:"67px"}} alt={data.img} />
                <div>
                    <a href style={{top:"50%"}}>
                        {data.headline}
                    </a>
                </div>
            </div>
          )
        })}
    </div>
  );
}
export default Articles;
