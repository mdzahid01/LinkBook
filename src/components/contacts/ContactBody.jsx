import deleteIcon from '../../assets/delete_trash.svg'
import { FaWhatsapp, FaEnvelope,FaTrashAlt } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';                                                                   

const ContactBody = ({ contact, onClick, onDelete }) => {
  return (
    <div className="contact-body" onClick={() => onClick(contact)}>
        <div className="credential-container">
            <span>{ contact.name }</span>
            <span className="span-email">{ contact.email }</span>
        </div>
        <div className="icon-container">
            <button className="icon icon-delete" onClick={(e) => {
                e.stopPropagation()
                onDelete(contact)
                console.log('Delete contact clicked')
            }}>
                <FaTrashAlt  size={20} color='#e80000'/>
            </button>

            <a href={`tel:${contact.phone}`} className="icon icon-phone" onClick={(e) => e.stopPropagation()}>
                <MdPhone size={20} color="#3e3ee3" />
            </a>
            <a href={`mailto:${contact.email}`} className="icon icon-email" onClick={(e) => e.stopPropagation()}>
                <FaEnvelope size={20} color="#FF5733" />
            </a>
            <a href={`https://wa.me/91${contact.phone}`} className="icon icon-whatsapp" onClick={(e) => e.stopPropagation()}>
                <FaWhatsapp size={20} color="#4CAF50" />
            </a>
            
        </div>
    </div>
  )
}

export default ContactBody