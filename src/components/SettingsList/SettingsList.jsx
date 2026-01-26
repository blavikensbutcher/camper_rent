import { LocationSearch } from "../LocationSearch/LocationSearch.jsx";
import css from "./SettingsList.module.css";
import { VehicleEquipment } from "../VehicleEquipment/VehicleEquipment.jsx";
import { VehicleType } from "../VehicleType/VehicleType.jsx";
import { FavoriteSection } from "../FavoriteSection/FavoriteSection.jsx";
import { useState } from "react";

export const SettingsList = ({ filteredCampers, setFilteredCampers }) => {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [vanType, setVanType] = useState(null);

  return (
    <div className={css.settings_container}>
      <LocationSearch
        filteredCampers={filteredCampers}
        setFilteredCampers={setFilteredCampers}
      />
      <FavoriteSection />
      <VehicleEquipment
        setFilteredCampers={setFilteredCampers}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <VehicleType
        setFilteredCampers={setFilteredCampers}
        vanType={vanType}
        setVanType={setVanType}
      />
    </div>
  );
};
