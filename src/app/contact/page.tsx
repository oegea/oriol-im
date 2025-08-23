'use client'

import { useState } from 'react'
import ReadingProgress from '@/components/ReadingProgress'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    checkField: '',
    legalCheck: false
  })
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    legal: ''
  })
  
  const [messageStatus, setMessageStatus] = useState(0) // 0: form, 1: loading, 2: success
  
  const validateEmail = (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    let hasErrors = false
    const newErrors = { name: '', email: '', message: '', legal: '' }
    
    // Legal check validation
    if (!formData.legalCheck) {
      hasErrors = true
      newErrors.legal = 'Debes aceptar las condiciones legales y de privacidad.'
    }
    
    // Name validation
    if (formData.name.length < 1) {
      hasErrors = true
      newErrors.name = 'Este campo es obligatorio.'
    } else if (formData.name.length > 30) {
      hasErrors = true
      newErrors.name = 'El nombre no puede ser mayor a 30 caracteres.'
    }
    
    // Email validation
    if (formData.email.length < 1) {
      hasErrors = true
      newErrors.email = 'Este campo es obligatorio.'
    } else if (!validateEmail(formData.email)) {
      hasErrors = true
      newErrors.email = 'El e-mail introducido no es válido.'
    }
    
    // Message validation
    if (formData.message.length < 10) {
      hasErrors = true
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres.'
    }
    
    setErrors(newErrors)
    
    // If no errors, submit
    if (!hasErrors) {
      setMessageStatus(1)
      try {
        const response = await fetch('https://wp.oriol.im/contact-form/index.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            checkField: formData.checkField,
            legalCheck: formData.legalCheck
          })
        })
        
        if (response.ok) {
          setMessageStatus(2)
        } else {
          setMessageStatus(0)
        }
      } catch (error) {
        setMessageStatus(0)
        // Handle error if needed
      }
    }
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const renderForm = () => (
    <div className="bg-white md:rounded-lg md:shadow-lg p-4 md:p-8">
      <div className="section-title">
        💬 Hablemos
      </div>
      <div className="prose prose-lg max-w-none mb-8">
        <p>Tanto si quieres preguntarme algo, charlar un rato, compartir algo interesante, o proponerme un nuevo proyecto, puedes utilizar este formulario de contacto para contactar conmigo.</p>
        <p>Intentaré en todo caso dar respuesta a todos los mensajes recibidos, siempre y cuando sean relevantes y respetuosos. Pero por favor, ten en cuenta que todo ello depende de mi tiempo libre y excepcionalmente las respuestas pueden demorarse.</p>
        <p>Recuerda que también puedes encontrarme en Twitter bajo el nombre de <a href="https://www.twitter.com/OriolEgea" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 font-semibold">@OriolEgea</a>.</p>
      </div>
      
      <form onSubmit={handleSubmit} autoComplete="off" method="POST">
        {/* Honeypot field */}
        <input
          type="text"
          name="checkField"
          value={formData.checkField}
          onChange={handleInputChange}
          style={{ opacity: 0, position: 'fixed', bottom: 0, zIndex: 0 }}
          placeholder="Name"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleInputChange}
              className="form-input"
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
        </div>
        
        <textarea
          name="message"
          rows={7}
          placeholder="Escribe aquí tu mensaje"
          value={formData.message}
          onChange={handleInputChange}
          className="form-textarea"
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
        
        <div className="mb-0">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="legalCheck"
              checked={formData.legalCheck}
              onChange={handleInputChange}
              className="mt-1"
            />
            <span>
              He leído la <a href="/politica-de-privacidad/" target="_blank" className="link">política de privacidad</a> y acepto que mis datos sean tratados con la única finalidad de dar respuesta a mi mensaje por correo electrónico.
            </span>
          </label>
          {errors.legal && <p className="form-error">{errors.legal}</p>}
        </div>
        
        {messageStatus === 0 && (
          <button type="submit" className="form-submit">
            Enviar
          </button>
        )}
        
        {messageStatus === 1 && (
          <div className="flex justify-center mt-5">
            <div className="loading-spinner">
              <div></div><div></div><div></div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
  
  const renderThanks = () => (
    <div className="bg-white md:rounded-lg md:shadow-lg p-4 md:p-8 text-center">
      <div className="text-6xl mb-4">✉️</div>
      <div className="section-title mb-6">
        He recibido tu mensaje
      </div>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg mb-4">Tu mensaje se ha enviado correctamente.</p>
        <p className="mb-4">Puede que dependiendo de mi carga de trabajo, necesite algo de tiempo para responderte, pero trataré de hacerlo en un momento u otro.</p>
        <p className="text-lg font-semibold text-yellow-600">¡Muchas gracias por escribirme!</p>
      </div>
      <button 
        onClick={() => setMessageStatus(0)}
        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
      >
        Enviar otro mensaje
      </button>
    </div>
  )

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-gray-50 md:py-12">
        <div className="max-w-6xl mx-auto px-2 md:px-6">
          <div className="max-w-4xl mx-auto">
            {(messageStatus === 0 || messageStatus === 1) && renderForm()}
            {messageStatus === 2 && renderThanks()}
          </div>
        </div>
      </div>
    </>
  )
}