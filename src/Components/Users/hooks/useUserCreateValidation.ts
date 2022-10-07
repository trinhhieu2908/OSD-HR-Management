import { useMemo } from 'react';
import * as yup from 'yup';
import { FORM_STEPS } from '../../../Constants/users';

export const useUserCreateValidation = (): any => {
  const requiredMessage = 'required'

  const schema = useMemo(
    () => ({
      // Step1 validating
      [FORM_STEPS.USER_ROLE]: yup.object({
        role: yup.string().required(),
      }),

      // Step2 validating
      [FORM_STEPS.USER_DETAILS]: yup.object({
        username: yup.string().required("username required"),
        password: yup.string().required("password required"),
        email: yup
          .string()
          .email("input valid email")          
          .required("email required"),
      }),
    }),
    [requiredMessage]
  );

  return useMemo(() => schema, [schema]);
};
