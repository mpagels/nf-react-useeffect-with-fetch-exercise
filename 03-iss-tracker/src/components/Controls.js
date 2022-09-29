export default function Controls({ longitude, latitude, onRefresh }) {
  return (
    <div className="controls">
      <output className="controls__display">Lat: {longitude.toFixed(5)}</output>
      <output className="controls__display">Long: {latitude.toFixed(5)}</output>
      <button className="controls__button" onClick={onRefresh}>
        Refresh
      </button>
    </div>
  )
}
