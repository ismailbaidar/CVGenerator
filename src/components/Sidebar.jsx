import {
  faBolt,
  faChevronLeft,
  faChevronRight,
  faLanguage,
  faPerson,
  faSuitcase,
  faThumbsUp,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons"
import image from "../assets/Images/cv-removebg-preview.png"

import SideBarItem from "./SideBarItem"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar({ setPage, page }) {
  const sidebarItems = [
    {
      title: "Information Personelles",
      icon: faPerson,
    },
    {
      title: "Educations",
      icon: faUserGraduate,
    },
    { title: "Experiences", icon: faSuitcase },
    { title: "Compétances", icon: faBolt },
    { title: "Langues", icon: faLanguage },
    { title: "Références", icon: faThumbsUp },
  ]
  const [collapsed, setCollapsed] = useState(true)
  return (
    <nav className={`sidebar ${collapsed}`}>
      {/* <button
        onClick={() => setCollapsed(!collapsed)}
        className="collapse-action"
      >
        {collapsed ? (
          <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} />
        )}
      </button> */}
      <section className="logo">
        <img src={image} alt="" className="logo-image" />
      </section>

      <section className="navigation-bar">
        {sidebarItems.map(({ title, icon }) => {
          return (
            <SideBarItem
              page={page}
              title={title}
              icon={icon}
              setPage={setPage}
            />
          )
        })}
      </section>
    </nav>
  )
}
