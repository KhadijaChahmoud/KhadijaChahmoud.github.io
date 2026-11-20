import { portfolioVideos } from './lib/portfolioVideos';

export default function TimelinePage() {
  return (
    <main id="main" className="page-main timeline-page" tabIndex={-1}>
      <section className="timeline-hero">
        <span className="eyebrow">KHADIJA’S WORK AND LIFE</span>
        <h1>Creative <span className="gradient-text">timeline</span></h1>
        <p>Brand stories, client collaborations, events, and everyday moments—collected in video.</p>
      </section>

      <section className="content-section portfolio-video-timeline" aria-labelledby="portfolio-video-heading">
        <div className="section-heading">
          <span className="eyebrow">VIDEO STORIES</span>
          <h2 id="portfolio-video-heading">Moments in motion.</h2>
          <p>Explore all {portfolioVideos.length} videos from Khadija’s portfolio.</p>
        </div>
        <ol className="portfolio-video-grid">
          {portfolioVideos.map((video) => (
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
      </section>
    </main>
  );
}
