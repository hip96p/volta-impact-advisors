import { getMarketData, getNewsFeeds } from '@/lib/market-data';
import MarketWatchClient from './MarketWatchClient';

export default async function MarketWatchPage() {
  const [marketData, news] = await Promise.all([
    getMarketData(),
    getNewsFeeds(),
  ]);

  return <MarketWatchClient marketData={marketData} news={news} />;
}
