import "../assets/style/color-pallet.css"
export default function ColorPallet({ setColor }) {
  const colors = [
    "yellow",
    "light-orange",
    "dark-orange",
    "red-orange",
    "dark-pink",
    "light-pink",
    "dark-purple",
    "purple",
    "dark-blue",
    "blue",
    "light-blue",
    "ocean-blue",
    "green",
    "light-green",
    "dark",
  ]

  return (
    <div className="color-pallet">
      {colors.map((color) => {
        return (
          <span
            onClick={() => setColor(color)}
            className={`color ${color}`}
          ></span>
        )
      })}
    </div>
  )
}
