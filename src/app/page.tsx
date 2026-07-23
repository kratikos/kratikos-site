import { getPopularPolls } from '../lib/api';
import HomeClient from './page-client';

export default async function Home() {
  const [internacional, nacional, regional] = await Promise.all([
    getPopularPolls('internacional', 3).catch(() => undefined),
    getPopularPolls('nacional', 3).catch(() => undefined),
    getPopularPolls('regional', 3).catch(() => undefined),
  ]);
  
  const prefetchedPolls = {
    internacional,
    nacional,
    regional,
  };
  
  return <HomeClient prefetchedPolls={prefetchedPolls} />;
}
