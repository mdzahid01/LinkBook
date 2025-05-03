import deleteIcon from '../../assets/delete_trash.svg'
import { FaWhatsapp, FaEnvelope,FaTrashAlt } from 'react-icons/fa';
import { GrView } from "react-icons/gr";
import { MdPhone } from 'react-icons/md';

const truncateText = (text, maxLength = 12) => {
    return text.length > maxLength 
      ? `${text.substring(0, maxLength)}...` 
      : text;
  }
  

const ContactBody = ({ contact, onDelete, contactClick }) => {
  return (
    <div className="contact-body">
        <div className="credential-container">
            <span className='span-name'>{ truncateText(contact.name) }</span>
            <span className="span-email">{ truncateText(contact.email,18) }</span>
        </div>
        <div className="icon-container">

            <a href={`tel:${contact.phone}`} className="icon icon-phone" onClick={(e) => e.stopPropagation()}>
                <MdPhone size={15} color="#3e3ee3" />
            </a>
            <a href={`mailto:${contact.email}`} className="icon icon-email" onClick={(e) => e.stopPropagation()}>
                <FaEnvelope size={15} color="#FF5733" />
            </a>
            <a href={`https://wa.me/91${contact.phone}`} className="icon icon-whatsapp" onClick={(e) => e.stopPropagation()}>
                <FaWhatsapp size={15} color="#4CAF50" />
            </a>

            <a className="icon icon-delete" onClick={(e) => {
                e.stopPropagation()
                contactClick(contact)
                console.log('view contact clicked')
            }}>
                <GrView  size={15} color='#0b9ff3'/>
            </a>

            <a  href='' className="icon icon-delete" onClick={(e) => {
                e.stopPropagation()
                onDelete(contact)
                console.log('Delete contact clicked')
            }}>
                <FaTrashAlt  size={15} color='#e80000'/>
            </a>
            
        </div>
    </div>
  )
}

export default ContactBody