import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="about-box container border">
        <div className="row">
          <div className="col-lg-4">
            <div className="row">
              <div className="col-sm-12">
                <img
                  src="/react-portfolio/image/eric1-logo.jpg"
                  alt="profile pic1"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img
                  src="/react-portfolio/image/eric2-logo.jpg"
                  alt="profile pic2"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg">
            <div>
              <b>だいたい</b>
              <hr />
              <p>
                7 年以上の経験を持つシニア ソフトウェア開発者。 Web
                およびブロックチェーン開発を中心とした数多くのソフトウェア
                テクノロジーの経験。 大学生の時にICPCの一部であるACMで入賞。
                クライアントによって「シルバー スタンダード」とみなされた 15
                万ドルの研究プロジェクトの開発を主導しました。 AI/ML
                ベースのアルゴリズムを微調整した結果、クライアントの収益が 2
                倍に増加しました。 高品質のコードと電力通信を提供します。
                を提供することで、オンラインでの完璧な評判の構築をサポートすることに熱心です。
                新興企業や企業向けのハイレベルな顧客サポート。
                世界中の無制限のクライアント向けに柔軟なプロジェクトに取り組みました。
                バックエンドシステムのアーキテクチャ構築に強く、フロントエンド開発にも優れた感性を持っています。
                テスト駆動開発のスペシャリスト。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
