import { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);

    const addNewObject = async (restOfUrl = '') => {
        // For some reason if I just pass the addNewObject in the onClick normally and not as an arrow function, React adds an object
        // so even if I intend for 'restOfUrl' to be empty, it actually recieves an object
        // So i added some error handling for that event

        if (typeof restOfUrl === 'object' && restOfUrl !== null) {
            restOfUrl = '';
        }
        try {
          const url = restOfUrl ? `${baseUrl}${restOfUrl}` : baseUrl;
          const res = await axios.get(url);
          setData(data => [...data, { ...res.data, id: uuid() }]);
        } catch (error) {
          console.error(`Error adding new object: ${error}`);
        }
      }

    return [data, addNewObject];
}

export default useAxios;

