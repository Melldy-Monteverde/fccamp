import "./Testimony.css";

const Testimony = (info) => {
  return (
    <div className="testimony-container">
      <img
        className="testimony-img"
        src={require(`../../../imgs/testimonio-${info.img}.png`)}
        alt={info.name}
      />
      <div className="testimony-text-container">
        <p className="testimony-text-name">
          <strong>{info.name}</strong> in {info.country}
        </p>
        <p className="testimony-text-position">
          {info.position} in {info.company}
        </p>
        <p className="testimony-text-testimony">{info.testimony}</p>
      </div>
    </div>
  );
};

export default Testimony;
