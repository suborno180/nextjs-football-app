import { convertToSlug } from '@/helper/functions';
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async ({ res }) => {
  const res = await fetch(`https://script.google.com/macros/s/${process.env.GOOGLE_SHEET_SECRET}/exec`, { cache: 'no-store' });
  const result = await res.json();

  const data = result.data.output;
  const paths = data.map((e) => `/${convertToSlug(e.teams_home_name)}_vs_${convertToSlug(e.teams_away_name)}_${e.fixture_id}`);

  return getServerSideSitemap(ctx, paths);
};

const Sitemap = () => null;

export default Sitemap;
