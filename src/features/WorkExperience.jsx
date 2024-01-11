import React, { useState } from "react"
import CollapseSection from "../components/CollapseSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
//import "../assets/style/WorkExperience.css";

function WorkExperience({ experiences, setExperiences }) {
  const [formData, setFormData] = useState({
    name: "",
    jobname: "",
    jobtype: "",
    description: "",
    datestart: "",
    dateend: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)
  const [nameValidationError, setNameValidationError] = useState("")
  const [jobnameValidationError, setJobnameValidationError] = useState("")
  const [jobtypeValidationError, setjobtypeValidationError] = useState("")
  const [descriptionValidationError, setDescriptionValidationError] =
    useState("")
  const [datestartValidationError, setDatestartValidationError] = useState("")
  const [dateendValidationError, setdateendValidationError] = useState("")
  const [dateComparisonError, setDateComparisonError] = useState("")
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nameValidation = formData.name.length > 0
    const jobaneValidation = formData.jobname.length > 0
    const jobtypeValidation = formData.jobname.length > 0
    const descriptionValidation = formData.description.length > 0
    const datestartValidation = formData.datestart.length > 0
    const dateendValidation = formData.dateend.length > 0
    let dateDeCommencement = datestartValidation
      ? new Date(formData.datestart)
      : null
    let dateDeFin = dateendValidation ? new Date(formData.dateend) : null
    let ComparisondateValidation =
      dateDeCommencement === null ||
      dateDeFin === null ||
      dateDeCommencement <= dateDeFin

    if (!ComparisondateValidation) {
      setDateComparisonError(
        "La date de fin doit être après la date de commencement"
      )
    } else {
      setDateComparisonError("")
    }

    if (
      nameValidation &&
      jobaneValidation &&
      jobtypeValidation &&
      descriptionValidation &&
      dateendValidation &&
      datestartValidation &&
      ComparisondateValidation
    ) {
      if (editingIndex !== null) {
        const newExperiences = [...experiences]
        newExperiences[editingIndex] = formData
        setExperiences(newExperiences)
        setEditingIndex(null)
      } else {
        setExperiences([...experiences, formData])
      }
      setFormData({
        name: "",
        jobname: "",
        jobtype: "",
        description: "",
        datestart: "",
        dateend: "",
      })
      setNameValidationError("")
      setJobnameValidationError("")
      setDateComparisonError("")
      setDescriptionValidationError("")
      setjobtypeValidationError("")
      setDatestartValidationError("")
      setdateendValidationError("")

      setDatestartValidationError("")
    } else {
      if (!nameValidation) {
        setNameValidationError("ce champ est obligatoire")
      } else {
        setNameValidationError("")
      }

      if (!jobaneValidation) {
        setJobnameValidationError("ce champ est obligatoire")
      } else {
        setJobnameValidationError("")
      }

      if (!jobtypeValidation) {
        setjobtypeValidationError("ce champ est obligatoire")
      } else {
        setjobtypeValidationError("")
      }
      if (!descriptionValidation) {
        setDescriptionValidationError("ce champ est obligatoire")
      } else {
        setDatestartValidationError("")
      }
      if (!datestartValidation) {
        setDatestartValidationError("ce champ est obligatoire")
      } else {
        setDatestartValidationError("")
      }
      if (!datestartValidation) {
        setdateendValidationError("ce champ est obligatoire")
      } else {
        setdateendValidationError("")
      }
    }
  }

  const handleEdit = (index) => {
    setFormData(experiences[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newExperiences = [...experiences]
    newExperiences.splice(index, 1)
    setExperiences(newExperiences)
    setEditingIndex(null)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="companyname">
            Nom de l'entreprise *
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Entrer le nom de l'entreprise "
            />
            {nameValidationError && (
              <span className="error">{nameValidationError}</span>
            )}
          </label>

          <label htmlFor="jobname">
            l'intitule de post *
            <input
              type="text"
              name="jobname"
              id="jobname"
              value={formData.jobname}
              onChange={handleChange}
              placeholder="Entrer l'intitule de votre post "
            />
            {jobnameValidationError && (
              <span className="error">{jobnameValidationError}</span>
            )}
          </label>

          <label htmlFor="jobtype">
            {" "}
            Type de travail *
            <select
              name="jobtype"
              id="jobtype"
              value={formData.jobtype}
              onChange={handleChange}
            >
              <option></option>
              <option>Hybride</option>
              <option>Temps plein</option>
              <option>A distance</option>
            </select>
            {jobtypeValidationError && (
              <span className="error">{jobtypeValidationError}</span>
            )}
          </label>

          <label htmlFor="description">
            Description de mission *
            <textarea
              type="text"
              name="description"
              id="description"
              rows={5}
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            {descriptionValidationError && (
              <span className="error">{descriptionValidationError}</span>
            )}
          </label>

          <label htmlFor="datestart">
            Date de début *
            <input
              type="date"
              name="datestart"
              value={formData.datestart}
              onChange={handleChange}
            />
            {dateComparisonError.length > 0 && (
              <span className="error">{dateComparisonError}</span>
            )}
            {datestartValidationError && (
              <span className="error">{datestartValidationError}</span>
            )}
          </label>

          <label htmlFor="dateend">
            Date de fin *
            <input
              type="date"
              name="dateend"
              value={formData.dateend}
              onChange={handleChange}
            />
            {dateComparisonError.length > 0 && (
              <span className="error">{dateComparisonError}</span>
            )}
            {dateendValidationError && (
              <span className="error">{dateendValidationError}</span>
            )}
          </label>
          <button type="submit" className="btn1">
            {editingIndex !== null
              ? "Modifier Experience"
              : "Ajouter Experience"}
          </button>
          <br />
        </form>

        <div className="display">
          {experiences.map((experience, index) => (
            <CollapseSection key={index} title={experience.name}>
              <div className="d-grid">
                <span>Nom de l'entreprise : {experience.name}</span>
                <span>Poste : {experience.jobname}</span>
                <span>Type de travail: {experience.jobtype}</span>
                <span>Description: {experience.description}</span>
                <span>
                  Périod :{experience.datestart}-{experience.dateend}
                </span>
              </div>
              <div className="actions">
                <button
                  className="action update action-button"
                  onClick={() => handleEdit(index)}
                >
                  <FontAwesomeIcon className="icon" icon={faEdit} />
                  Modifier
                </button>
                <button
                  className="action delete action-button"
                  onClick={() => handleDelete(index)}
                >
                  <FontAwesomeIcon className="icon" icon={faTrash} />
                  Supprimer
                </button>
              </div>
            </CollapseSection>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkExperience
