import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <div class="container mx-auto px-4 flex justify-center">
           
            <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-2xl text-center text-gray-200 p-6 bg-green-900">Login Here</h2> <br />
                <label class="block py-2">
                    <input className="form-input" type="text" defaultValue="test" {...register("example")} placeholder="Enter your email..." />
                </label>
                <label class="block py-2">
                    <input className="form-input" type="password" {...register("exampleRequired", { required: true })} placeholder="Enter your password..." />
                    {errors.exampleRequired && <span>This field is required</span>}
                </label>
                <label class="block">
                    <input className="my-6 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit" />
                </label>
            </form>
        </div>
    );
};

export default Login;