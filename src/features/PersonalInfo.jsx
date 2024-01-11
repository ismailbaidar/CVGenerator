import { faImages, faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

function PersonalInfo({
  informations,
  formData,
  setFormData,
  image,
  setImage,
  setInformations,
}) {
  //commentaire
  const [editingIndex, setEditingIndex] = useState(null)
  const [nameValidationError, setNameValidationError] = useState("")
  const [titreValidationError, setTitreValidationError] = useState("")
  const [profileValidationError, setProfileValidationError] = useState("")
  const [emailValidationError, setEmailValidationError] = useState("")
  const [addressValidationError, setAddressValidationError] = useState("")
  const [telValidationError, setTelValidationError] = useState("")
  const [LinkedInValidationError, setLinkedInValidationError] = useState("")
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

  const handleFileChange = (event) => {
    const file = event.target.files[0]

    if (file) {
      const previewImageUrl = URL.createObjectURL(file)
      setImage({
        file: file,
        previewUrl: previewImageUrl,
      })
      console.log(image)
    }
  }

  // useEffect(() => {
  //   Validation()
  // })

  const handleSubmit = (e) => {}

  useEffect(() => {
    console.log("azzaeaz", informations)
  })

  return (
    <>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label HtmlFor="image" className="image-label">
            {" "}
            <FontAwesomeIcon icon={faImages} className="svg" />
            <span>Télecharger une image</span>
            <input
              type="file"
              hidden
              name="image"
              accept=".png, .jpg, .jpeg"
              value={formData.image}
              onChange={handleFileChange}
              required
            />
          </label>
          <label>
            Nom Complet *
            <input
              type="text"
              name="nom"
              placeholder="Marc Legrand"
              value={formData.nom}
              onChange={handleChange}
              required
            />{" "}
            {nameValidationError.length > 0 && (
              <span className="error">{nameValidationError}</span>
            )}
          </label>
          <label>
            Titre *
            <input
              type="text"
              name="titre"
              placeholder="Commercial"
              value={formData.titre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Profile *
            <textarea
              name="profile"
              rows="4"
              cols="50"
              placeholder="Description ..."
              value={formData.profile}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email *
            <input
              type="email"
              name="email"
              placeholder="Nom@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Adresse *
            <input
              type="text"
              name="adresse"
              placeholder="washington"
              value={formData.adresse}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Téléphone *
            <input
              type="tel"
              name="phone"
              placeholder="+20 955......"
              value={formData.phone}
              onChange={handleChangeNumber}
              required
            />
          </label>
          <label>
            Linkedin *
            <input
              type="text"
              name="linkden"
              placeholder="Marc Legrand"
              value={formData.linkden}
              onChange={handleChange}
              required
            />
          </label>
        </form>
      </div>
    </>
  )
}

export default PersonalInfo
