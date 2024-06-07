import {LocationSearch} from "../LocationSearch/LocationSearch.jsx";
import css from './SettingsList.module.css'
import {VehicleEquipment} from "../VehicleEquipment/VehicleEquipment.jsx";
import {VehicleType} from "../VehicleType/VehicleType.jsx";
import Button from "../../shared/components/Button/Button.jsx";

export const SettingsList = () => {
    return (
        <div className={css.settings_container}>
            <LocationSearch />
            <VehicleEquipment />
            <VehicleType />
            <Button classname={css.btn}>Search</Button>
        </div>
    )
}
