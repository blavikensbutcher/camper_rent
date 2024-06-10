import { Helmet } from 'react-helmet-async';
import {SettingsList} from "../components/SettingsList/SettingsList.jsx";
import {CampersList} from "../components/CampersList/CampersList.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFilteredVans, selectFilteredVans} from "../redux/filters/filterSlice.js";
import {useGetAllCampersQuery} from "../redux/contacts/camperApi.js";

export default function FavoritesPage() {
    const { data } = useGetAllCampersQuery();
    const [campers, setCampers] = useState([]);
    const [filteredCampers, setFilteredCampers] = useState([]);
    const [page, setPage] = useState(4);
    const [favorite, setFavorite] = useState(useSelector(selectFilteredVans));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addFilteredVans(favorite));
    }, [favorite]);

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
                favorite={favorite}
                setFavorite={setFavorite}
            />
        </div>
    );
}
