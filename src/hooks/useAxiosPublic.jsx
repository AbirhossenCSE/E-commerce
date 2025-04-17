import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL: 'https://e-commerce-server-jade-six.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;