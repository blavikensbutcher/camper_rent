import { Helmet } from 'react-helmet-async';
import {SettingsList} from "../components/SettingsList/SettingsList.jsx";
import {CampersList} from "../components/CampersList/CampersList.jsx";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addFilteredVans, selectFilteredVans} from "../redux/filters/filterSlice.js";
import {useGetAllCampersQuery} from "../redux/contacts/camperApi.js";
import {NoFavorites} from "../components/NoFavorites/NoFavorites.jsx";

export default function FavoritesPage() {
    const { data } = useGetAllCampersQuery();
    const [campers, setCampers] = useState([]);
    const [filteredCampers, setFilteredCampers] = useState([]);
    const [page, setPage] = useState(4);
    const [favorite, setFavorite] = useState(useSelector(selectFilteredVans));
    const dispatch = useDispatch();

    const kek = useSelector(selectFilteredVans)

    useEffect(() => {
        dispatch(addFilteredVans(favorite));
        setFilteredCampers(favorite)
    }, [favorite, filteredCampers]);

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
            {favorite.length > 0 ? <CampersList
                data={data}
                campers={campers}
                setCampers={setCampers}
                filteredCampers={filteredCampers}
                setFilteredCampers={setFilteredCampers}
                page={page}
                setPage={setPage}
                favorite={favorite}
                setFavorite={setFavorite}
            /> : <NoFavorites />}
        </div>
    );
}
