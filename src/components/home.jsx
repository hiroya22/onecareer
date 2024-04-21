import { Link } from "react-router-dom";
import "../styles/home.css";

// 遷移前のホームサイト
function Home() {
  return (
    <div className="home_container">
      <div className="home">
        <div className="intern">
          <Link to="/about">
            <button className="intern_btn">
              <p className="intern_text">
                インターンの選考準備は
                <br />
                まず、ココから！
              </p>
            </button>
          </Link>
        </div>
        <div className="buttons">
          <button>
            <p className="btn">新着インターン</p>
          </button>
          <button>
            <p className="btn">締切間近</p>
          </button>
          <button>
            <p className="btn">ワンキャリア合説</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
