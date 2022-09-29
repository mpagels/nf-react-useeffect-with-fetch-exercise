export default function Map({longitude, latitude}) {
    const [x, y] = positionToMapCoordinates(longitude, latitude);
  
    return (
      <div className="map-container">
        <img
          className="map"
          src=" https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"
          alt="a map of the world"
        />
        <div
          className="iss"
          style={{
            top: y,
            left: x,
          }}
        ></div>
      </div>
    );
  }
  
  function positionToMapCoordinates(long, lat) {
    const x = `${((long + 180) % 360) / 3.6}%`;
    const y = `${50 - lat / 1.8}%`;
    return [x, y];
  }
  