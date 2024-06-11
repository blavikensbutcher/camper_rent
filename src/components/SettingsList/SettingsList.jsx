import { LocationSearch } from "../LocationSearch/LocationSearch.jsx";
import css from "./SettingsList.module.css";
import { VehicleEquipment } from "../VehicleEquipment/VehicleEquipment.jsx";
import { VehicleType } from "../VehicleType/VehicleType.jsx";
import { FavoriteSection } from "../FavoriteSection/FavoriteSection.jsx";

export const SettingsList = ({ filteredCampers, setFilteredCampers }) => {
  return (
    <div className={css.settings_container}>
      <LocationSearch
        filteredCampers={filteredCampers}
        setFilteredCampers={setFilteredCampers}
      />
      <FavoriteSection />
      <VehicleEquipment
        setFilteredCampers={setFilteredCampers}
      />
      <VehicleType
        filteredCampers={filteredCampers}
        setFilteredCampers={setFilteredCampers}
      />
    </div>
  );
};
