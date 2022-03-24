import { Component } from "react"

const colors = [
  "bg-apple-close",
  "bg-apple-min",
  "bg-apple-zoom"
]
export default class WindowButtons extends Component {
  render() {
    return (
      <div className="flex p-4 mr-2">
        {
          colors.map((color, idx) => {
            const dotClass = `rounded-full mac-os-buttons m-2 ${color}`;
            return <div className={dotClass} key={idx}></div>
          })
        }
        <div className="flex-1"/>
      </div>
    )
  }
}