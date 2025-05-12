import React, { useEffect } from "react";
import useForm from "../../hooks/useForm";
import { FaWhatsapp, FaEnvelope, FaTrashAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { GrView } from "react-icons/gr";
import "./ContactModal.css";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = "Name is required";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(values.phone)) {
    errors.phone = "Phone number must be 10 digits";
  }
  if (!values.address.trim()) {
    errors.address = "Address is required";
  }
  if (!values.category.trim()) {
    errors.category = "Category is required";
  }
  return errors;
}

const ContactModal = ({ mode, initialValue, onSubmit, onClose }) => {

  //this one is for memoizing the initialValues so that it doesn't get re-initialized on every render
  // this is important because if we don't do this, the initialValues will be re-initialized on every render and the form will not work as expected.
  const memoizedInitialValues = React.useMemo(
    () => ({
      name: initialValue?.name || "",
      email: initialValue?.email || "",
      phone: initialValue?.phone || "",
      address: initialValue?.address || "",
      category: initialValue?.category || "",
    }),
    [initialValue]
  );


  const { values, errors, handleChange, handleSubmit, handleReset } = useForm({
    initialValues: memoizedInitialValues,
    validate: validate,
    onSubmit: (formValues) => {
      console.log("Form submitted:", formValues);
      onSubmit(formValues); // Call the onSubmit prop with the form values
    },
  });

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2>{mode === "edit" ? "Edit Contact" : "Add Contact"}</h2>

          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Name"
            autoComplete="name"
            // autoFocus
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            autoComplete="email"
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            id="address"
            name="address"
            value={values.address}
            onChange={handleChange}
            placeholder="Address"
            autoComplete="address-line1"
          />
          {errors.address && <p className="error">{errors.address}</p>}

          <input
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            autoComplete="tel"
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <select
            name="category"
            id="category"
            value={values.category}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Option
            </option>
            <option value="family">Family</option>
            <option value="friend">Friend</option>
            <option value="work">Work</option>
            <option value="other">Other</option>
          </select>
          {errors.category && <p className="error">{errors.category}</p>}

          <div className="btnAndIcon-container">
            {mode === "edit" && (
              <div className="icon-container">
                <a
                  href={`tel:${initialValue.phone}`}
                  className="icon icon-phone"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MdPhone size={20} color="#3e3ee3" />
                </a>
                <a
                  href={`mailto:${initialValue.email}`}
                  className="icon icon-email"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaEnvelope size={20} color="#FF5733" />
                </a>
                <a
                  href={`https://wa.me/91${initialValue.phone}`}
                  className="icon icon-whatsapp"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaWhatsapp size={20} color="#4CAF50" />
                </a>
              </div>
            )}

            <div className="modal-buttons">
              <button type="submit">
                {mode === "edit" ? "Update" : "Add"}
              </button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
