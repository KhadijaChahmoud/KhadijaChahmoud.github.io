import { portfolioVideos } from '../lib/portfolioVideos';

const featuredVideo = portfolioVideos[0];

export default function TimelineVideo() {
  return (
    <section className="content-section timeline-video-section" aria-labelledby="timeline-video-heading">
      <div className="timeline-video-card">
        <span className="eyebrow">FEATURED VIDEO · {featuredVideo.category}</span>
        <h2 id="timeline-video-heading">{featuredVideo.title}</h2>
        <p>{featuredVideo.description}</p>
        <video controls playsInline preload="metadata" aria-label={featuredVideo.title}>
          <source src={featuredVideo.src} type="video/mp4" />
          Your browser does not support embedded video. <a href={featuredVideo.src}>Open the MP4 video.</a>
        </video>
        <a className="secondary-button timeline-all-videos" href="/timeline.html">See all videos in Khadija’s timeline</a>
      </div>
    </section>
  );
}
