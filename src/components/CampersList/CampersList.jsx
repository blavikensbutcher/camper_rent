import { useState, useEffect } from 'react';
import { CamperItem } from "./CamperItem/CamperItem.jsx";
import { useGetAllCampersQuery } from "../../redux/contacts/camperApi.js";

export const CampersList = () => {
  const { data } = useGetAllCampersQuery();
  const [campers, setCampers] = useState([]);

  useEffect(() => {
    if (data) {
      setCampers(data);
    }
  }, [data]);

  if (!campers.length) {
    return <div>Loading...</div>;
  }

  return (
      <ul>
        {campers.map((item, idx) => (
            <CamperItem data={item} key={idx} />
        ))}
      </ul>
  );
};
