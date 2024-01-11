import React, { useState } from "react"
import CollapseSection from "../components/CollapseSection"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"

function References({ references, setReferences }) {
  const [editingIndex, setEditingIndex] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    tele: "",
    email: "",
    entreprise: "",
    position: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }
  const handleChangeNumber = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value.replace(/\D/g, ""),
    })
  }
  const [nomchefValidationError, setnomchefValidationError] = useState("")
  const [telephChefValidationError, settelephChefValidationError] = useState("")
  const [EmailValidationError, setEmailValidationError] = useState("")
  const [nomEntreValidationError, setnomEntreValidationError] = useState("")
  const [postenomValidationError, setpostenomValidationError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    let nomchefValidation = formData.name.length > 0
    let telephValidation = formData.tele.length > 0
    let EmailValidation = formData.email.length > 0
    let nomEntreValidation = formData.entreprise.length > 0
    let positionValidation = formData.position.length > 0
    if (
      nomchefValidation &&
      telephValidation &&
      EmailValidation &&
      nomEntreValidation &&
      positionValidation
    ) {
      if (editingIndex !== null) {
        const newReferences = [...references]
        newReferences[editingIndex] = formData
        setReferences(newReferences)
        setEditingIndex(null)
        console.log(references)
      } else {
        setReferences([...references, formData])
        console.log(references)
      }
      e.preventDefault()

      setFormData({
        name: "",
        tele: "",
        email: "",
        entreprise: "",
        position: "",
      })
      setnomchefValidationError("")
      settelephChefValidationError("")
      setEmailValidationError("")
      setnomEntreValidationError("")
      setpostenomValidationError("")
    } else {
      if (!nomchefValidation) {
        setnomchefValidationError("ce champ est obligatoire")
      } else {
        setnomchefValidationError("")
      }
      if (!telephValidation) {
        settelephChefValidationError("ce champ est obligatoire")
      } else {
        settelephChefValidationError("")
      }
      if (!EmailValidation) {
        setEmailValidationError("ce champ est obligatoire")
      } else {
        setEmailValidationError("")
      }
      if (!nomEntreValidation) {
        console.log(nomEntreValidation)
        setnomEntreValidationError("ce champ est obligatoire")
      } else {
        setnomEntreValidationError("")
      }
      if (!positionValidation) {
        setpostenomValidationError("ce champ est obligatoire")
      } else {
        setpostenomValidationError("")
      }
    }
  }

  const handleEdit = (index) => {
    setFormData(references[index])
    setEditingIndex(index)
  }

  const handleDelete = (index) => {
    const newReferences = [...references]
    newReferences.splice(index, 1)
    setReferences(newReferences)
    setEditingIndex(null)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom de chef *
          <input
            type="text"
            onChange={handleChange}
            value={formData.name}
            name="name"
            id="name"
          />
          {nomchefValidationError.length > 0 && (
            <span className="error">{nomchefValidationError}</span>
          )}
        </label>

        <label htmlFor="tel">
          Téléphone*
          <input
            type="tel"
            onChange={handleChangeNumber}
            value={formData.tele}
            name="tele"
            id="tel"
            placeholder="+20 955......"
          />
          {telephChefValidationError.length > 0 && (
            <span className="error">{telephChefValidationError}</span>
          )}
        </label>

        <label htmlFor="Email">
          Email*
          <input
            type="email"
            onChange={handleChange}
            value={formData.email}
            name="email"
            id="Email"
            placeholder="exemple@gmail.com"
          />
          {EmailValidationError.length > 0 && (
            <span className="error">{EmailValidationError}</span>
          )}
        </label>

        <label htmlFor="entreprise">
          Nom d'entreprise *
          <input
            type="text"
            onChange={handleChange}
            id="entreprise"
            value={formData.entreprise}
            name="entreprise"
          />
          {nomEntreValidationError.length > 0 && (
            <span className="error">{nomEntreValidationError}</span>
          )}
        </label>

        <label htmlFor="position">
          Poste de chef *
          <input
            type="text"
            onChange={handleChange}
            name="position"
            value={formData.position}
            id="position"
            placeholder="Ex: Chef de projet "
          />
          {postenomValidationError.length > 0 && (
            <span className="error">{postenomValidationError}</span>
          )}
        </label>

        <button>
          {editingIndex !== null ? "Modifier Réference" : "Ajouter Réference"}
        </button>
      </form>
      <div className="display">
        {references.map(
          ({ name, tele, email, entreprise, position }, index) => (
            <CollapseSection index={index} title={name}>
              <div className="ref-display">
                <p>Entreprise : {entreprise}</p>
                <p>Poste : {position}</p>
                <p>Email : {email}</p>
                <p>Téléphone: {tele}</p>
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
          )
        )}
      </div>
    </>
  )
}

export default References
