import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  login: yup
    .string()
    .email('Введите адрес электронной почты')
    .required('Это поле должно быть заполненно'),
  password: yup
    .string()
    .required('Это поле должно быть заполненно')
    .min(8, 'Пароль состоит минимум из 8 символов')
    .matches(/(^[a-zA-Z_\-+]+$)/, 'Используйте латинский алфавит'),
});
