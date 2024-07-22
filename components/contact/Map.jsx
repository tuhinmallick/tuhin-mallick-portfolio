const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.9411394630065!2d9.972833876149659!3d53.59451187236236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b188ba5ad23529%3A0xb9623b5e30929152!2sGeschwister-Scholl-Stra%C3%9Fe%20154%2C%2020251%20Hamburg!5e0!3m2!1sen!2sde!4v1721685219503!5m2!1sen!2sde"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
