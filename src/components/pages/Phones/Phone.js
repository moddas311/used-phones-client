import React from 'react';

const Phone = ({ phone }) => {



    const { img, name, location, sellPrice, used, postedDate } = phone;


    return (
        <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl">{name}</h2>
                    <p className="dark:text-gray-100">Location: {location}</p>
                    <p className="dark:text-gray-100">Price: {sellPrice}৳</p>
                    <p className="dark:text-gray-100">Used: {used}</p>
                    <p className="dark:text-gray-100">Post Date: {postedDate}</p>
                </div>
                <button  className="btn btn-success flex items-center mx-auto justify-center rounded-md ">Book Now</button>
            </div>
        </div>
    );
};

export default Phone;