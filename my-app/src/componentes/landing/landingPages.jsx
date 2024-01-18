import "./LandingPages.scss";

const LandingPages = () => {
  return (
    <section>
      <section class="layout">
        <div>
          {" "}
          <img
            className="fixI"
            alt="NextUI hero Image"
            src="./logo.png"
          />
        </div>
        <ul class="Words">
  <li class="Words-line">
    <p>&nbsp;</p>
    <p> &nbsp;</p>
  </li>
  <li class="Words-line">
    <p>ZifyPro</p>
    <p>hacemos </p>
  </li>
  <li class="Words-line">
    <p>startup</p>
    <p>de tus </p>
  </li>
  <li class="Words-line">
    <p>Argentina</p>
    <p>ideas </p>
  </li>
  <li class="Words-line">
    <p>full stack</p>
    <p>una </p>
  </li>
  <li class="Words-line">
    <p>developers</p>
    <p>realidad.</p>
  </li>
  <li class="Words-line">
    <p>&nbsp;</p>
    <p>&nbsp;</p>
  </li>
</ul>
      </section>
      <div className="text"></div>
      <video className="videoH" muted autoPlay loop>
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="capa"></div>
    </section>
  );
};
export default LandingPages;