import '../styles/Slider.css';

const Slider = () => (
  <section id="works">
    <h2>Trabajos Realizados</h2>
    <div className="image-grid">
      <div className="image-item">
        <img src="trabajo1.jpg" alt="Trabajo 1" />
      </div>
      <div className="image-item">
        <img src="trabajo2.jpg" alt="Trabajo 2" />
      </div>
      <div className="image-item">
        <img src="trabajo3.jpg" alt="Trabajo 3" />
      </div>
      <div className="image-item">
        <img src="trabajo4.jpg" alt="Trabajo 4" />
      </div>
    </div>
  </section>
);

export default Slider;
