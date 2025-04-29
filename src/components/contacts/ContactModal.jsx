import React,{useState} from 'react'
import './ContactModal.css'
const ContactModal = ({mode, initialValue,onSubmit,onClose}) => {
  const [formData, setFormData] = useState({
    name: initialValue?.name || '',
    email: initialValue?.email || '',
    phone: initialValue?.phone || '',
    address: initialValue?.address || '',
    category: initialValue?.category || ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!formData.name || !formData.email || !formData.phone || !formData.address || !formData.category){
      alert('All fields must be filled')
      return;
    }
    onSubmit(formData);
  }

  return (
    <div className="overlay">
      <div className='modal' onClick={(e)=> e.stopPropagation()}>
      <form onSubmit={handleFormSubmit}>
      <h2>{mode === 'edit'? 'Edit Contact': 'Add Contact'}</h2>

      <input type="text"
            id='name'
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='name'
            autoComplete='name'
            // readOnly={mode === 'edit'}
            />
      <input type="email" 
            name="email"
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='email'
            autoComplete='email'
            // readOnly={mode === 'edit'}
            />
      <input type="text" 
            name="address"
            id='address'
            value={formData.address}
            onChange={handleChange}
            placeholder='address'
            autoComplete='street-address'
            // readOnly={mode === 'edit'}
            />
      <input type="text"
              name="phone"
              id='phone'
              pattern="[1-9]{1}[0-9]{9}"
              value={formData.phone}
              onChange={handleChange}
              placeholder='phone number'
              autoComplete='tel'
              // readOnly={mode === 'edit'}
              />
      <select 
        name="category" 
        id="category"
        value={formData.category}
        onChange={handleChange}
        // disabled={mode === 'edit'}
        >
         <option value="" disabled>select Option</option>
         <option value="family">Family</option>
         <option value="friend">Friend</option>
         <option value="work">Work</option>
         <option value="other">Other</option>
      </select>

      <div className="modal-buttons">
        
        <button type='submit'>
          {mode==='edit'?'Update':'Add'}
        </button>

        <button type="button" onClick={onClose}>Cancel</button>
      </div>
      </form>
    </div>
    </div>
  )
}

export default ContactModal