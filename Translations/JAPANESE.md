# プログラミング オデッセイ

## クイックアクセスインデックス

- [はじめに](#はじめに)
- [目的](#目的)
- [インストール要件](#インストール要件)
- [貢献方法](#貢献方法)
  - [GitHub Desktopを使用した貢献](#GitHub-Desktopを使用した貢献)
  - [貢献者フォーマット](#貢献者フォーマット)
- [よくある質問（FAQs）](#よくある質問)
- [ライセンス](#ライセンス)
- [お問い合わせ](#お問い合わせ)
- [貢献者の認識](#貢献者の認識)
- [共有のすすめ](#共有のすすめ)
- [質問やフィードバック](#質問やフィードバック)
- [翻訳](#翻訳)

## はじめに

**プログラミング オデッセイ**へようこそ！このプロジェクトは、初心者からプロまで、あらゆるレベルの個人がプログラミングの世界での個人的な旅を共有できる親しみやすいプラットフォームです。経験を記録することで、これから始める人や、コーディングを続けるためのインスピレーションを求めている人々にとって、貴重なリソースを提供します。困難に直面したこと、マイルストーンを達成したこと、有益な技術を発見したことなど、あなたのストーリーが他のプログラマーに勇気を与えるかもしれません。

## 目的

**プログラミング オデッセイ**の主な目的は、プログラマーが独自の経験や洞察を共有できる支援的なコミュニティを育むことです。私たちは、ポジティブな経験もネガティブな経験も、プログラマーとしての成長に貢献するものだと信じています。私たちの旅を共有することで、以下を実現できます。

- **他者にインスピレーションを与える**: 同じような困難に直面している他のプログラマーに、モチベーションと励ましを提供します。
- **コミュニティを構築する**: 知識や経験が自由に共有される包括的な環境を作り出します。
- **成長を振り返る**: ドキュメンテーションを通じて、自分の進歩や成果を認識するのを助けます。

## インストール要件

貢献する前に、以下をローカルマシンにインストールしておく必要があります。

- **GitHub Desktop**: Gitのワークフローを簡素化するためのグラフィカルインターフェースです。[desktop.github.com](https://desktop.github.com/) からダウンロードできます。

## 貢献方法

あなたのプログラミングの旅や洞察を共有して、貢献してみませんか？以下は、参加するための詳細なガイドです。

### GitHub Desktopを使用した貢献

1. **リポジトリをフォークする**

   1. Webブラウザでリポジトリにアクセスします:
      - このリンクにアクセスしてください: [Programming Odyssey](https://github.com/Gilgabunada/Programming-Odyssey).

   2. GitHubページに入ったら、右上にある **Fork** ボタンをクリックします。これにより、GitHubアカウント内にプロジェクトのコピーが作成されます。

   ![Forking a repository](https://github.com/Gilgabunada/Programming-Odyssey/blob/main/Step%20images/Githubdesktop.png?raw=true)

2. **フォークしたリポジトリをクローンする**

   1. GitHub Desktopを起動します。

   2. GitHub Desktopのメニューバーから **File** をクリックし、 **Clone repository** を選択します。

   3. 次に表示される画面で、 **URL** タブを選択し、次のようにフォークしたリポジトリのURLを入力します：

      ```bash
      https://github.com/[YourUsername]/Programming-Odyssey.git
      ```

   4. クローンを作成するローカルパスを選択します。このパスを忘れないようにメモしておくと良いでしょう。その後、 **Clone** ボタンをクリックします。

   ![Cloning a repository](https://github.com/Gilgabunada/Programming-Odyssey/blob/main/Step%20images/Clonerepo.png?raw=true)

3. **GitHub Desktopでリポジトリを開く**

   1. クローンが完了したら、GitHub Desktopの左側にリポジトリが表示されます。それをクリックして選択してください。

   ![Opening a repository](https://github.com/Gilgabunada/Programming-Odyssey/blob/main/Step%20images/Openrepo.png?raw=true)

4. **新しいブランチを作成する**

   1. 左上にある **Current Branch** ドロップダウンメニューをクリックし、 **New Branch** を選択します。

   2. 新しいブランチに適切な名前を付けます（例：`add-your-name`）。名前を入力した後、 **Create Branch** ボタンをクリックします。

   ![Creating a branch](https://github.com/Gilgabunada/Programming-Odyssey/blob/main/Step%20images/Newbranch.png?raw=true)

5. **ストーリーを追加する**

   1. クローンしたリポジトリのパスを探し、 `index.html` ファイルを開きます。例えば、以下のようなパスになります：

      ```bash
      C:\Users\Gabunada\Desktop\Programming-Odyssey
      ```

   2. `index.html` ファイルをエディタで開きます（VScode、Sublime、Atomなどを使って開いてください）。

   3. 次に、エントリー部分に以下のコードブロックを探して、編集します:

      ```html
      <!------ エントリー開始 --------->
      <div class="entry">
          <div class="details">
              <p><strong>ジョン・ドウ</strong> | 学生 | ウェブ開発</p>
          </div>
          <div class="story">
              <p>私は若い頃からプログラミングを始め、アルゴリズムやデータ構造を理解するのに多くの困難に直面しました。最初は難しかったですが、時間が経つにつれて、問題を解決し、機能的なウェブサイトを作成する過程を楽しむようになりました。私の最初のプロジェクトはシンプルなポートフォリオでしたが、経験を積むにつれて、より複雑なプロジェクトに取り組むようになりました。何かを自分で作り上げたときの満足感は言葉にできないほどです。今でも困難に直面しますが、それぞれが学びの機会です。現在は、スクラッチから完全に応答性のあるeコマースサイトを構築する作業に取り組んでおり、その旅は非常にやりがいのあるものです。
              </p>
          </div>
      </div>
      <!------ エントリー終了 ----------->
      ```

   4. 自分のストーリーに合わせて、この部分を編集してください。名前やプログラミングの経験、学んだこと、どんなプロジェクトをやっているのかを追加しましょう。

6. **GitHub Desktopで変更をコミットする**

   1. GitHub Desktopに戻り、変更内容を確認してください。左側の **Changes** タブに、ファイルの変更が表示されているはずです。

   2. コミットメッセージを入力し（例：`Added my programming story`）、 **Commit to [your-branch-name]** ボタンをクリックして、変更をローカルに保存します。

7. **GitHubに変更をプッシュする**

   1. コミットが完了したら、GitHub Desktopの上部にある **Push origin** ボタンをクリックして、変更をリモートリポジトリに送信します。

   ![Pushing changes](https://github.com/Gilgabunada/Programming-Odyssey/blob/main/Step%20images/Push.png?raw=true)

8. **プルリクエストを作成する**

   1. リモートリポジトリに変更をプッシュした後、GitHubでプルリクエストを作成します。プルリクエストタブを開き、 **New pull request** をクリックします。

   2. プルリクエストの詳細を記入し、作成してください。

   ![Creating a pull request](https://github.com/Gilgabunada/Programming-Odyssey/blob/main/Step%20images/Pullrequest.png?raw=true)
