import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Write.css';

const Write = () => {
    const { register, handleSubmit, name, name2, desc, watch, formState: { errors } } = useForm();

    console.log(watch("example"));
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL,
        };
        console.log(data);
        const url = `http://localhost:8000/addEvent`;

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-gray-700 text-2xl">Title</h2>
                <input defaultValue="Title" name="name" {...register("name")} className="h-12 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="4" />
                <input defaultValue="Title2" name="name2" {...register("name2")} className="h-12 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="4" />
                <input defaultValue="Write story here" name="desc" {...register("desc")} className="h-12 mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0" rows="4" />
                <input name="exampleRequired" onChange={handleImageUpload} type="file" className="h-full w-full" />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" />
            </form>
        </>
    );
};

export default Write;