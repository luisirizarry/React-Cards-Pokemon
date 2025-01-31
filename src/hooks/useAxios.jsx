import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (baseUrl, restOfUrl = '') => {
    const [data, setData] = useState([]);

    const addNewObject = async () => {
        try{
            const res = await axios.get(`${baseUrl + restOfUrl}`);
            setData(data => [...data, {...res.data, id: uuid()}])
        } catch (e) {
            console.error(`Error adding new object: ${e}`);
        }
    }

    return [data, addNewObject];
}

export default useAxios;

