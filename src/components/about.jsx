// まずここからページ
// classで名前決めてApp.cssでデザインいじれる。
function About() {

  return (
    <div>
        <h1>インターンの選考準備はまず、ココから！</h1>
        <p class="item item1">
            　ステップ1　スタートダッシュ講座に参加しよう！
        </p>

        <p class="item item2">
            　ステップ2　企業合同説明会に参加しよう！
        </p>
        <details>
            <summary class="item item3">ステップ3　ES提出準備をしよう！</summary>
            <ul class="list">
                <ol>
                    自己分析セミナー
                </ol>
                <ol>
                    ES・体験談
                </ol>
                <ol>
                    ESの達人
                </ol>
            </ul>
        </details>
        <details>
            <summary class="item item4">ステップ4　エントリーをしよう！</summary>
            <ul class="list">
                <ol>
                    お気に入り企業の登録
                </ol>
                <ol>
                    企業分析
                </ol>
            </ul>
        </details>
    </div>
    );
}

export default About;