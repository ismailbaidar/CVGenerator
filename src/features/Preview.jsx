import React, { useRef } from "react"

import "../assets/style/preview.css"
import image from "../assets/Images/cv-removebg-preview.png"
import { useEffect, useState } from "react"
import ColorPallet from "../components/ColorPallet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import ReactToPrint from "react-to-print"
export default function Preview({
  references,
  languages,
  skills,
  image,
  informations,
  educations,
  experiences,
}) {
  const [color, setColor] = useState("dark")
  useEffect(() => {
    console.log(informations)
  })
  const print = useRef()
  return (
    <div className={`preview-left-side `}>
      <div ref={print} className="preview-container">
        <section className={`left-side ${color}`}>
          <div className="image-name">
            <div className="image">
              <img
                src={
                  image.previewUrl
                    ? image.previewUrl
                    : "https://d29fhpw069ctt2.cloudfront.net/icon/image/49067/preview.svg"
                }
                alt=""
              />
            </div>
            <h3 className="preview-name">{informations?.nom}</h3>
          </div>
          <div className="sections">
            <div className="info">
              {informations.email != "" && (
                <span className="personal-info-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="personal-info">{informations.email}</span>
                </span>
              )}
              {informations.phone != "" && (
                <span className="personal-info-wrapper">
                  <FontAwesomeIcon icon={faPhone} />
                  <span className="personal-info">{informations.phone}</span>
                </span>
              )}
              {informations.adresse != "" && (
                <span className="personal-info-wrapper">
                  <FontAwesomeIcon icon={faHome} />
                  <span className="personal-info">{informations.adresse}</span>
                </span>
              )}
              {informations.linkden != "" && (
                <span className="personal-info-wrapper">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <span className="personal-info">{informations.linkden}</span>
                </span>
              )}
            </div>
            {/*  Langues*/}

            {languages.length > 0 && (
              <div>
                <h4 className="p-4">Langues</h4>
                <ul className="langues">
                  {languages.map((lang) => {
                    return (
                      <li>
                        {lang.langue} ({lang.level})
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </section>
        <section className="right-side">
          {/* <div className="personal-info-wrapper"></div> */}
          {informations.titre != "" && (
            <h1 className="titre">{informations.titre}</h1>
          )}
          {"" != informations.profile && (
            <div>
              <h4 className={`Sep-titel ${color}`}>Profile</h4>
              <p>{informations.profile}</p>
            </div>
          )}

          {experiences.length > 0 && (
            <div className="experiences">
              <div className="Sep-titel">
                <h4 className="">
                  Experiences
                </h4>

              </div>
              <div className="experiences-container">
                {experiences.map((WE) => {
                  return (
                    <div className="preview-we">
                      <div className="date-job-name">
                        <span className="date">
                          de {WE.datestart} a {WE.dateend}
                        </span>
                        <span className="jobname">{WE.jobname}</span>
                      </div>
                      <span className="job-name">{WE.name}</span>
                      <span className="job-Info">{WE.description}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {educations.length > 0 && (
            <div className="education">
              <div>
                <h4 className="Sep-titel">
                  Educations
                </h4>
              </div>
              <div className="educations-container">
                {educations.map((education) => {
                  return (
                    <div className="education-element">
                      <div className="name-date">
                        {" "}
                        <span>
                          {education.date_de_commencement.split("-")[1]}/
                          {education.date_de_commencement.split("-")[0]}
                          {" - "}
                          {education.date_de_fin.split("-")[1]}/
                          {education.date_de_fin.split("-")[0]}
                        </span>
                        <span>{education.diplome}</span>
                      </div>
                      <div className="details">
                        {education.ecole},{education.location}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {skills.length > 0 && (
            <div className="skills">
              <div className="Sep-titel">
                <h4 className="">
                  Compétances
                </h4>
              </div>
              <div className={`Sep-titel ${color}`}>
                {skills.map((skill) => {
                  return (
                    <div>
                      {skill} <span className="bold"> - </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {references.length > 0 && (
            <div className="education">
              <div className="Sep-titel">
                <h4 className="">
                  Réferences
                </h4>

              </div>
              <div className="ref-container">
                {references.map((reference) => {
                  return (
                    <div className="education-element">
                      <div className="name-date">
                        {" "}
                        <span>{reference.name}</span>
                        <span>{reference.entreprise}</span>
                      </div>
                      <div className="details">
                        {reference.email},{reference.tele}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </section>
      </div>
      <ColorPallet setColor={setColor} />
      {
        <>
          <ReactToPrint
            trigger={() => (
              <button className="add-button"> Imprimer Le Cv</button>
            )}
            content={() => print.current}
          />
        </>
      }
    </div>
  )
}
