import { useState } from 'react';
import { useEffect } from 'react';

function useForm({initialValues, onSubmit, validate}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
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

//   useEffect(() => {
//     setValues(initialValues);
//   }, [initialValues]);

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        handleReset
    }

}

export default useForm;