import { useState } from 'react';

const useObjectState = (initialValues = {}) => {
  const [state, setState] = useState(initialValues);
  const setValues = (values) => setState((s) => ({ ...s, ...values }));
  const resetObject = () => setState(initialValues);
  return [state, setValues, resetObject];
};

export default useObjectState;
