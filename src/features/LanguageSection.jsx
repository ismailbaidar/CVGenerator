// LanguageSection.jsx
import React, { useEffect, useState } from "react"
import CollapseSection from "../components/CollapseSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"

const LanguageSection = ({ languages, setLanguages }) => {
  const [formData, setFormData] = useState({
    langue: "",
    level: "",
  })
  const [editingIndex, setEditingIndex] = useState(null)

  const handleLanguageChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...formData, [name]: value })
  }
  const [LangueValidationError, setLangueValidationError] = useState("")
  const [LevelValidationError, setLevelValidationError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let langueValidation = formData.langue.length > 0
    let levelValidation = formData.level.length > 0
    if (langueValidation && levelValidation) {
      if (editingIndex !== null) {
        const newLanguage = [...languages]
        newLanguage[editingIndex] = formData

        setLanguages(newLanguage)
        setEditingIndex(null)
      } else {
        setLanguages([...languages, formData])
      }
      setFormData({
        langue: "",
        level: "",
      })
      setLangueValidationError("")
      setLevelValidationError("")
    } else {
      if (!langueValidation) {
        setLangueValidationError("ce champ est obligatoire")
      } else {
        setLangueValidationError("")
      }
      if (!levelValidation) {
        setLevelValidationError("ce champ est obligatoire")
      } else {
        setLevelValidationError("")
      }
    }
  }

  const handleEdite = (index) => {
    setFormData(languages[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newLanguages = [...languages]
    newLanguages.splice(index, 1)
    setLanguages(newLanguages)
    setEditingIndex(null)
  }

  const levels = ["Langue-maternnelle", "Basic", "Intermidiaire", "Avancé"]

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Langue *
          <input
            type="text"
            name="langue"
            value={formData.langue}
            onChange={handleLanguageChange}
            // required
          />
          {LangueValidationError.length > 0 && (
            <span className="error">{LangueValidationError}</span>
          )}
        </label>

        <label>
          Niveau *
          <select
            name="level"
            onChange={handleLanguageChange}
            id=""
            value={formData.level}
            // required
          >
            <option></option>
            {levels.map((level, index) => {
              return (
                <option key={index}>
                  {level == levels[0] ? "Langue maternnelle" : level}
                </option>
              )
            })}
          </select>
          {LevelValidationError.length > 0 && (
            <span className="error">{LevelValidationError}</span>
          )}
        </label>

        <button type="submit">
          {editingIndex !== null ? "Modifier la langue" : "Ajouter une langue"}
        </button>
      </form>
      <div className="display">
        {languages.map((lang, index) => (
          <CollapseSection title={lang.langue}>
            <div key={index} className="content">
              <div>
                {" "}
                {lang.langue}{" "}
                <span className={`type-label ${lang.level}`}>{lang.level}</span>
              </div>
              <div className="actions">
                <button
                  className="action update  action-button"
                  onClick={() => handleEdite(index)}
                >
                  <FontAwesomeIcon className="icon" icon={faEdit} />
                  Modifier
                </button>
                <button
                  className="action delete  action-button"
                  onClick={() => handleDelete(index)}
                >
                  <FontAwesomeIcon className="icon" icon={faTrash} />
                  Supprimer
                </button>
              </div>
            </div>
          </CollapseSection>
        ))}
      </div>
    </div>
  )
}

export default LanguageSection
