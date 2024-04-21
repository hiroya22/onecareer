// まずここからページ
// classで名前決めてApp.cssでデザインいじれる。
import CardList from "./cardlist";


function About() {

  return (
    <div>
        <h1>インターンの選考準備はまず、ココから！</h1>
        <p class="item item1">
            　ステップ1　スタートダッシュ講座に参加しよう！
        </p>
        <ul class="list">
            <ol>
                <a href="https://www.onecareer.jp/events/seminar/40593?utm_source=oc&utm_medium=top_oc_original_event">エンジニア就活準備スタートダッシュ講座</a>
            </ol> 
        </ul>
        <div className="App container mx-auto">
            <div className="mt-6">
                <CardList />
            </div>
        </div>

        <p class="item item2">
            　ステップ2　企業合同説明会に参加しよう！
        </p>
        <ul class="list">
            <ol>
                <a href="https://www.onecareer.jp/events/gosetsu?page=1&per=20&sort=time_limit_at&category=seminar&searchByCurrentUserGraduateYear=false&prefectures=%7B%22online%22%3Afalse%2C%22prefecture_ids%22%3A%5B%5D%7D&upperLimitOfCompanyReview=5&lowerLimitOfCompanyReview=0">企業合同説明会</a>
            </ol>   
        </ul>
        <details>
            <summary class="item item3">ステップ3　ES提出準備をしよう！</summary>
            <ul class="list">
                <ol>
                    <a href="https://www.onecareer.jp/events/seminar/47512?utm_source=oc&utm_medium=top_oc_original_event">自己分析セミナー</a>
                </ol>
                <ol>
                    <a href ="https://www.onecareer.jp/experiences">過去のES・体験談</a>
                </ol>
                <ol>
                    <a href ="https://www.onecareer.jp/chats">ESの達人</a>
                </ol>
            </ul>
        </details>
        <details>
            <summary class="item item4">ステップ4　エントリーをしよう！</summary>
            <ul class="list">
                <ol>
                    お気に入り企業の登録(マイページにとばす)
                </ol>
                <ol>
                    <a href="https://www.onecareer.jp/companies?page=1&per=20&lowest_rating=0&highest_rating=5">企業分析</a>
                </ol>
            </ul>
        </details>
        <div class="fixed-div">
            <h2>初心者向け<br/>就活記事</h2><br/>
            <div class="letter2">
                <a href="https://www.onecareer.jp/articles/3344">就活の順番</a><br/>
                <a href="https://www.onecareer.jp/articles/2592">インターン準備</a><br/>
                <a href="https://www.onecareer.jp/articles/3363">自己分析お役立ち</a><br/>
            </div>
        </div>
        <div class="fixed-div2">
            <a  href ="#" class="letter">マイページへ</a>
        </div>
    </div>
    );
}

export default About;