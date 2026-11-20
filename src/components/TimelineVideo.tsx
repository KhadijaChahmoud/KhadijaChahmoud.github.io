import { portfolioVideos } from '../lib/portfolioVideos';

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
        {featuredVideos.map((video) => (
          <li className="portfolio-video-card" key={video.id}>
            <div className="portfolio-video-copy">
              <span className="eyebrow">{video.category}</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
            <video controls playsInline preload="metadata" aria-label={video.title}>
              <source src={video.src} type="video/mp4" />
              Your browser does not support embedded video. <a href={video.src}>Open the MP4 video.</a>
            </video>
          </li>
        ))}
      </ol>
      <a className="secondary-button timeline-all-videos" href="/timeline.html">
        See all videos in Khadija’s timeline
      </a>
    </section>
  );
}
