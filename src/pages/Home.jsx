import { CampersList } from "../components/CampersList/CampersList.jsx";
import { SettingsList } from "../components/SettingsList/SettingsList.jsx";
import { useGetAllCampersQuery } from "../redux/contacts/camperApi.js";
import { useState } from "react";

export default function Home() {
  const { data } = useGetAllCampersQuery();
  const [campers, setCampers] = useState([]);
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [page, setPage] = useState(4);

  return (
      <div style={{ display: "flex", columnGap: "25px" }}>
        <SettingsList
          data={data}
          campers={campers}
          setCampers={setCampers}
          filteredCampers={filteredCampers}
          setFilteredCampers={setFilteredCampers}
          page={page}
          setPage={setPage}
        />
          <CampersList
              data={data}
              campers={campers}
              setCampers={setCampers}
              filteredCampers={filteredCampers}
              setFilteredCampers={setFilteredCampers}
              page={page}
              setPage={setPage}
          />
      </div>
  );
}
