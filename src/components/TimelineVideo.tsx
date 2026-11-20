import { portfolioVideos } from '../lib/portfolioVideos';
import PortfolioVideoCard from './PortfolioVideoCard';

const featuredVideos = portfolioVideos.slice(0, 3);

export default function TimelineVideo() {
  return (
    <section className="content-section timeline-video-section" aria-labelledby="timeline-video-heading">
      <div className="section-heading">
        <span className="eyebrow">FEATURED VIDEO STORIES</span>
        <h2 id="timeline-video-heading">Moments in motion.</h2>
        <p>A few stories from Khadija’s work and life.</p>
      </div>
      <ol className="portfolio-video-grid homepage-video-grid">
        {featuredVideos.map((video) => <PortfolioVideoCard video={video} key={video.id} />)}
      </ol>
      <a className="secondary-button timeline-all-videos" href="/timeline.html">
        See all videos in Khadija’s timeline
      </a>
    </section>
  );
}
