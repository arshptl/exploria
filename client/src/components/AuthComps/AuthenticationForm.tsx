import { useForm } from "react-hook-form";
import React from "react";
import { useLoginMutation } from "../../network/loginMutaion";

const AuthenticationForm = () => {
    const [loginMutation, loginMutationResults] = useLoginMutation();
    // const { handleSubmit, register } = useForm();

    const { register, handleSubmit } = useForm();
    const [data, setData] = React.useState("");

    // const disableForm = loginMutationResults.loading || loading;

    const onSubmit = (values: any) => {
        console.log(values);
        loginMutation(values.email, values.password);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input defaultValue="Email" {...register("email")} />
            </div>
            <div>
                <input defaultValue="password" type="password" {...register("password")} />
            </div>
            <button type="submit">
                Submit
            </button>
        </form>
    );
};

export default AuthenticationForm;