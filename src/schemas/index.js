import * as Yup  from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(40).required("Please Enter the Name"),
    email:Yup.string().email().required("Please Enter the Email"),
    password:Yup.string().min(6).required("Please enter the password"),
    confirm_password:Yup.string().required().oneOf([
        Yup.ref("password"),null
    ],"Password must match"),
})