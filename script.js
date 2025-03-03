import { channels } from "./channels.js"
import { userIdToNameMap } from "./userId.js"
const tabsContainer = document.getElementById('tabs');
const messagesContainer = document.getElementById('messages-container');


console.log(channels);
console.log(userIdToNameMap);

// timestamp
function formatTimestamp(ts) {
  const date = new Date(parseFloat(ts) * 1000); // 秒をミリ秒に変換
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return date.toLocaleString("ja-JP", options);
}

// メッセージデータのユーザーIDを名前に変換
function transformUserIdToName(message) {
  // ユーザーIDがマッピングされている場合、名前に変換
  if (message.user && userIdToNameMap[message.user]) {
    message.user_profile = message.user_profile || {};
    message.user_profile.real_name = userIdToNameMap[message.user];
  }
  return message;
}

// メッセージを表示する関数
function displayMessages(channelName, messages) {
  const container = document.getElementById("messages-container");
  // 既存メッセージをクリア
  container.innerHTML = '';

  const messageMap = {};

  messages.forEach((message) => {
      message = transformUserIdToName(message);

      const isReply = message.thread_ts && message.ts !== message.thread_ts; // 返信メッセージか判定
      const parentTs = message.thread_ts || message.ts; // スレッドの親を特定


    // メッセージ全体の要素
    const messageElement = document.createElement('div');
    messageElement.className = isReply ? "reply" : "message";

    // プロフィール画像
    const img = document.createElement('img');
    img.src = message.user_profile?.image_72;

    // メッセージ内容
    const messageContent = document.createElement('div');
    messageContent.className = "message-content";

    // ヘッダー（名前と送信時刻）
    const header = document.createElement('div');
    header.className = "message-header";

    const nameSpan = document.createElement('span');
    nameSpan.textContent = ` ${message.user_profile?.real_name || "Unknown User"}`;

    const timeSpan = document.createElement('span');
    timeSpan.textContent = `${formatTimestamp(message.ts)}`; // 送信時刻
    timeSpan.style.marginLeft = "10px";
    timeSpan.style.color = "gray";

    header.appendChild(nameSpan);
    header.appendChild(timeSpan);

    // テキスト内容
    const text = document.createElement('div');
    text.className = "message-text";
    text.textContent = message.text; // メッセージ本文

    // 要素を組み立て
    messageContent.appendChild(header);
    messageContent.appendChild(text);
    messageElement.appendChild(img);
    messageElement.appendChild(messageContent);
    container.appendChild(messageElement);

    let replyContainer;
    if (!isReply) {
      replyContainer = document.createElement("span");
      replyContainer.classList.add("reply-container");
      replyContainer.style.display = "none";
    }

// 返信ボタン
    if (!isReply && message.replies && message.replies.length > 0) {
      const replyButton = document.createElement("button");
      replyButton.textContent = `${message.replies.length}件の返信`;
      replyButton.classList.add("reply-button");

      replyButton.addEventListener("click", () => {
        replyContainer.style.display = replyContainer.style.display === "none" ? "block" : "none";
      });

      messageContent.appendChild(replyButton);
    }
    

    if (!isReply) {
      container.appendChild(messageElement);
      messageMap[parentTs] = replyContainer; // 親メッセージの返信エリアをマップに保存
      messageContent.appendChild(replyContainer);
    } else {
      // 返信なら親メッセージの返信コンテナに追加
      const parentReplyContainer = messageMap[parentTs];
      if (parentReplyContainer) {
        parentReplyContainer.appendChild(messageElement);
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const messageContainers = {}; // タブごとのメッセージコンテナをキャッシュ

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const channelName = tab.dataset.channel; // タブに設定したデータ属性（例: data-channel="general"）
      // すでに読み込んだチャンネルなら再取得しない
      if (messageContainers[channelName]) {
        return;
      }

      // ローディング表示
      tab.innerHTML += '';

      fetchMessages(channelName).then((messages) => {
        // メッセージの表示処理
        const container = document.getElementById("messages-container");
        container.innerHTML = ""; // 既存の内容をクリア
        displayMessages(channelName, messages);

        // 読み込み完了後にキャッシュ
        messageContainers[channelName] = container.innerHTML;

        // ローディング表示を削除
         loadingText.remove();
      }).catch(() => {
        // エラー時にもローディング表示を削除
        loadingText.remove();
    });
    });

    tabContainer.appendChild(tab);
  });
});



// チャンネルデータをロードする関数
async function loadChannelData(channelName) {
  const files = channels[channelName];
  let allMessages = [];

  for (const fileName of files) {
    try {
      const response = await fetch(`log/${channelName}/${fileName}`);
      if (!response.ok) throw new Error(`Failed to load: ${fileName}`);
      const messages = await response.json();
      allMessages = [...allMessages, ...messages];
    } catch (error) {
      console.error(error.message);
    }
  }

  // メッセージをタイムスタンプ順に並べ替える
  allMessages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  // メッセージを表示
  displayMessages(channelName, allMessages);
}

// タブを作成する関数
function createTabs() {
  Object.keys(channels).forEach((channelName, index) => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = channelName;

    // タブクリックイベント
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));
      tab.classList.add('active');
      loadChannelData(channelName);
    });

    tabsContainer.appendChild(tab);
  });
}

// 初期化
createTabs();
