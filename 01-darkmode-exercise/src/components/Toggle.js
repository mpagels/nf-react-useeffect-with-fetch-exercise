export default function Toggle({ toggleValue, onChange }) {
  function handleUserInput(event) {
    const newValue = Boolean(Number(event.target.value))
    onChange(newValue)
  }

  return (
    <input
      type="range"
      min="0"
      max="1"
      value={Number(toggleValue)}
      onChange={handleUserInput}
    />
  )
}
