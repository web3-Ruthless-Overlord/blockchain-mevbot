import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

// 连接到 Solana 网络
const connection = new Connection('https://api.devnet.solana.com');

// 订阅交易事件
const subscription = connection.onTransactions(
  (tx) => {
    // 分析交易数据，识别潜在的套利机会
    console.log('收到交易：', tx);
  },
  'confirmed',
);

// 取消订阅
subscription.unsubscribe();