import { useState, useEffect } from "react"
import "../assets/style/skills.css"
import CollapseSection from "../components/CollapseSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"

function Skills({ skills, setSkills }) {
  const [formData, setFormData] = useState("")
  const [editingIndex, setEditingIndex] = useState(null)
  const [skillValidationError, setSkillValidationError] = useState("")

  const handleSkillChange = (e) => {
    setFormData(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const skillValidation = formData.length > 0
    if (skillValidation) {
      if (editingIndex !== null) {
        const newSkill = [...skills]

        newSkill[editingIndex] = formData

        setSkills(newSkill)
        setEditingIndex(null)
      } else {
        setSkills([...skills, formData])
      }
      setFormData("")
      setSkillValidationError("")
    } else {
      setSkillValidationError("ce champ est obligatoire")
    }
  }

  const handleEdite = (index) => {
    setFormData(skills[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newSkills = [...skills]
    newSkills.splice(index, 1)
    setSkills(newSkills)
    setEditingIndex(null)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Nom de compétence *
          <input type="text" value={formData} onChange={handleSkillChange} />
          {skillValidationError && (
            <span className="error">{skillValidationError}</span>
          )}
        </label>

        <button type="submit">
          {editingIndex !== null
            ? "Modifier la compétance"
            : "Ajouter une compétance"}
        </button>
      </form>
      <div className="display">
        {skills.map((skill, index) => (
          <CollapseSection title={skill}>
            <div key={index} className="content">
              <div> {skill} </div>
              <div className="actions">
                <button
                  className="action update action-button"
                  onClick={() => handleEdite(index)}
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
            </div>
          </CollapseSection>
        ))}
      </div>
    </div>
  )
}

export default Skills
