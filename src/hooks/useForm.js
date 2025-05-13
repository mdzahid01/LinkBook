import { useState } from 'react';
import { useEffect } from 'react';

function useForm({initialValues, onSubmit, validate}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle input changes - version 1
  // const handleChange = (event) => {
  //   const { name, value ,type } = event.target;
  //   if (type === 'checkbox') {
  //     setValues((prevValues) => ({ ...prevValues, [name]: event.target.checked }));
  //     return;
  //   }
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // }

  // Handle input changes - version 2
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue  = type === 'checkbox' ? checked : value;
    setValues((prevValues) => ({ ...prevValues, [name]: newValue }));
  }
  



  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  }

  const handleReset = () => {
    setValues(initialValues);
    setErrors({});
  }

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleReset
    }

}

export default useForm;