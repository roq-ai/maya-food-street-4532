import * as yup from 'yup';

export const shopManagerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  business_id: yup.string().nullable().required(),
});
