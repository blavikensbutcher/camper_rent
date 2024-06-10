import { CampersList } from "../components/CampersList/CampersList.jsx";
import { SettingsList } from "../components/SettingsList/SettingsList.jsx";
import { useGetAllCampersQuery } from "../redux/contacts/camperApi.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilteredVans,
  selectFilteredVans,
} from "../redux/filters/filterSlice.js";

export default function Home() {
  const { data } = useGetAllCampersQuery();
  const [campers, setCampers] = useState([]);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [page, setPage] = useState(4);
  const [favorite, setFavorite] = useState(useSelector(selectFilteredVans));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addFilteredVans(favorite));
  }, [favorite]);

  return (<>
    <div style={{ display: "flex", columnGap: "25px" }}>
      <SettingsList
        filteredCampers={filteredCampers}
        setFilteredCampers={setFilteredCampers}
      />
      <CampersList
        data={data}
        campers={campers}
        setCampers={setCampers}
        filteredCampers={filteredCampers}
        setFilteredCampers={setFilteredCampers}
        page={page}
        setPage={setPage}
        favorite={favorite}
        setFavorite={setFavorite}
      />
    </div>
      </>
  );
}
