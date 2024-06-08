import {LocationSearch} from "../LocationSearch/LocationSearch.jsx";
import css from './SettingsList.module.css'
import {VehicleEquipment} from "../VehicleEquipment/VehicleEquipment.jsx";
import {VehicleType} from "../VehicleType/VehicleType.jsx";
import Button from "../../shared/components/Button/Button.jsx";

export const SettingsList = ({data, campers, filteredCampers, setCampers, setFilteredCampers, page, setPage}) => {
    return (
        <div className={css.settings_container}>
            <LocationSearch filteredCampers={filteredCampers} setFilteredCampers={setFilteredCampers}/>
            <VehicleEquipment filteredCampers={filteredCampers} setFilteredCampers={setFilteredCampers}/>
            <VehicleType filteredCampers={filteredCampers} setFilteredCampers={setFilteredCampers} />
        </div>
    )
}
