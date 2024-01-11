import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export default function SideBarItem({ icon, title, setPage, page }) {
  return (
    <div
      onClick={() => setPage(title)}
      className={`navigation-item ${page == title}`}
    >
      <span className="navigation-item-icon">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
      </span>
      <span className="navigation-item-name">{title}</span>
    </div>
  )
}
