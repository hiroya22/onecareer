// componentsの中身引っ張ってくる
// headerとかの共通部分ここに

import { Routes, Route, Link} from 'react-router-dom'; // react-route-domバージョンによって機能違うから@6つけてver6いれた
import Home from './components/home';
import About from './components/about';
import NoMatch from './components/nomatch';
import LOGO from "./components/onelogo.png"; // ワンキャリアのロゴ引っ張った
import "./App.css"; // デザインとかはここでcss引っ張ってる


function App() {
    return (
        <div className="App">
            <header>
                <div class="header-left">
                    <img src={LOGO} className="logo-image" alt="logo"></img>
                    <Link to="#" class="mypage">マイページ</Link>
                </div>
            </header>
            <main> 
                <ul> {/*　この2つのリストは画面遷移しやすくするための仮置き。後で消す。 */}
                    <ol>
                        <Link to="/">Home</Link>
                    </ol>
                    <ol>
                        <Link to="/about">About</Link> 
                    </ol> 
                </ul>
                {/*　Routesの外は全ページの共通部分、headerとかfooterとかはそろえてよさそう。*/}
                <Routes> {/*　pathの定義。ページ増やしたかったらここを増やす element=でcomponents内の情報持ってきている。*/}
                    <Route path="/" element={<Home />} /> 
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </main>
            <footer>
                <p class="footer-menu">フッター</p>
            </footer>
        </div>

    );
}

export default App;