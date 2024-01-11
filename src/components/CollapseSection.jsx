import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import "../assets/style/collapsesection.css"
export default function CollapseSection({ title, children ,index}) {
  const [isVisible, setIsVisible] = useState(false)
  function toggleVisibility() {
    setIsVisible(!isVisible)
  }
  return (
    <div className="collapse-section" id={index}>
      <div className="preview">
        <span className="preview-title">{title}</span>
        <button onClick={toggleVisibility} className="toggle-visibility">
          {isVisible ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      {isVisible && <div className="collapse-content">{children}</div>}
    </div>
  )
}
