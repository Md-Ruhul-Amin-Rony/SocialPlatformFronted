// import { ErrorMessage, Form, Formik } from "formik";
// import MyTextInput from "../../app/common/form/MyTextInput";
// import { Button, Header } from "semantic-ui-react";
// import { useStore } from "../../app/stores/store";
// import { observer } from "mobx-react-lite";
// import * as Yup from 'yup';
// import ValidationError from "../errors/ValidationError";

// export default observer(function RegisterForm() {

//     const {userStore} = useStore();

//     return(
//         <Formik
//         initialValues={{displayName:'',username:'', email: '',  password: '', error: null}}
//         onSubmit={(values, {setErrors})=> userStore.register(values).catch(
//             error=>setErrors({error}))}
//             validationSchema={Yup.object({
//                 displayName: Yup.string().required(),
//                 username: Yup.string().required(),
//                 email: Yup.string().required().email(),
//                 password: Yup.string().required()
//             })}>

//                         {({handleSubmit,  isSubmitting,errors,isValid,dirty}) => (
//                             <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
//                                 <Header  as='h2' content='Sign up to Reactivities' color="teal" textAlign="center"/>
//                                 <MyTextInput name='displayName' placeholder='Display Name'/>
//                                 <MyTextInput name='username' placeholder='Username'/>
//                                 <MyTextInput name='email' placeholder='Email'/>
//                                 <MyTextInput name='password' placeholder='Password' type='password'/>
//                                 <ErrorMessage name='error' render={()=>
//                                 <ValidationError errors={errors.error as unknown as string[]}/>}/>
//                                 <Button 
//                                 disabled={!isValid || !dirty || isSubmitting}
//                                 loading={isSubmitting} 
//                                 type='submit' 
//                                 positive content='Register' fluid />
//                             </Form> 

//                         )}

//                     </Formik>
//                 )
//             })


import { ErrorMessage, Form, Formik } from "formik";

import { Button, Header } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import * as Yup from 'yup';
import ValidationError from "../errors/ValidationError";
import MyTextInput from "../../app/common/form/MyTextInput";

export default observer(function RegisterForm() {

    const { userStore } = useStore();

    const validationSchema = Yup.object({
        displayName: Yup.string().required('Display Name is required'),
        username: Yup.string().required('Username is required'),
        email: Yup.string().required('Email is required').email('Invalid email address'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be  6 characters long')
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
            .matches(/\d/, 'Password must contain at least one number')
    });

    return (
        <Formik
            initialValues={{ displayName: '', username: '', email: '', password: '', error: null }}
            onSubmit={(values, { setErrors }) => userStore.register(values).catch(
                error => setErrors({ error }))}
            validationSchema={validationSchema}
        >
            {({ handleSubmit, isSubmitting, errors, isValid, dirty }) => (
                <Form className='ui form error' onSubmit={handleSubmit} autoComplete='off'>
                    <Header as='h2' content='Sign up to Reactivities' color="teal" textAlign="center" />
                    <MyTextInput name='displayName' placeholder='Display Name' />
                    <MyTextInput name='username' placeholder='Username' />
                    <MyTextInput name='email' placeholder='Email' />
                    <MyTextInput name='password' placeholder='Password' type='password' />
                    <ErrorMessage name='error' render={() =>
                        <ValidationError errors={errors.error as unknown as string[]} />} />
                    <Button
                        disabled={!isValid || !dirty || isSubmitting}
                        loading={isSubmitting}
                        type='submit'
                        positive content='Register' fluid />
                </Form>
            )}
        </Formik>
    );
});
