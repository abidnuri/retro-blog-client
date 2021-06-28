import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Write.css';

const Write = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    console.log(watch("example"));
    const [imageURL, setIMageURL] = useState(null);
    const [name, setName] = useState("");

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL,
        };

        // console.log(eventData);

        const url = `https://floating-plains-53278.herokuapp.com/addPost`;

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventData),
        }).then((res) => console.log("server side response", res));
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "6ed2991a490963f34aaea2c30cd3ad6b");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            <div className="container mx-auto justify-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-gray-700 text-2xl">Title</h2>
                    <input
                        placeholder="Blog name"
                        name="name"
                        
                        {...register("name", { required: true })}
                        className="h-12 mt-1 block px-8 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                        rows="4"
                    />
                    <input
                        name="exampleRequired"
                        onChange={handleImageUpload}
                        type="file"
                        className="h-full w-full py-5"
                    />
                    <h2 className="text-gray-700 text-2xl">Write Here</h2>
                    <textarea
                        type="text"
                        placeholder="Tell Your story"
                        name="description"
                        rows="8"
                        {...register("description", { required: true })}
                        className="w-full py-3 px-8 focus:bg-white ring-1 rounded-md bg-gray-100 focus:outline-none border-0 text-md font-semibold"
                    ></textarea>
                    {errors.exampleRequired && <h2>This field is required</h2>}
                    <button
                        // onClick={()=>{}}
                        className="cursor-pointer my-6 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                        type="submit"
                        value={name}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Write;