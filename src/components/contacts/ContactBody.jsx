import deleteIcon from '../../assets/delete_trash.svg'
import { FaWhatsapp, FaEnvelope,FaTrashAlt } from 'react-icons/fa';
import { GrView } from "react-icons/gr";
import { MdPhone } from 'react-icons/md';

const truncateText = (text, maxLength = 12) => {
    return text.length > maxLength 
      ? `${text.substring(0, maxLength)}...` 
      : text;
  }
  

const ContactBody = ({ contact, onDelete, contactClick, onSelect, ischecked }) => {
  return (
    <div className="contact-body">
        <div className="contact-info">
        <input
          type="checkbox"
          className="select-checkbox"
          id={`checkbox-${contact.id}`}
          onChange={(e) => {onSelect(contact.id)}}
          checked={ischecked}
        //   onClick={(e) => e.stopPropagation()}
        />
            <div className="credential-container">
            <span className='span-name'>{ truncateText(contact.name,50) }</span>
            <span className="span-email">{ truncateText(contact.email,50) }</span>
            </div>
        </div>
        <div className="icon-container">

        

            <span className="icon icon-view"
            role='button'
            tabIndex={0}
            onClick={(e) => {
                e.stopPropagation()
                contactClick(contact)
                console.log('view contact clicked')
            }}>
                <GrView  size={15} color='#0b9ff3'/>
            </span>

            <span className="icon icon-delete"  role='button'
            tabIndex={0}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onDelete(contact)
                console.log('Delete contact clicked')
            }}>
                <FaTrashAlt  size={15} color='#e80000'/>
            </span>
            
        </div>
    </div>
  )
}

export default ContactBody