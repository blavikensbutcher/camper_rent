import { useState, useEffect } from 'react';
import { CamperItem } from "./CamperItem/CamperItem.jsx";
import { useGetAllCampersQuery } from "../../redux/contacts/camperApi.js";
import css from './CampersList.module.css'

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
      <ul className={css.list_items}>
        {campers.map((item, idx) => (
            <CamperItem data={item} key={idx} />
        ))}
      </ul>
  );
};
