import {CampersList} from "../components/CampersList/CampersList.jsx";
import {SettingsList} from "../components/SettingsList/SettingsList.jsx";


export default function Home() {
  return (
    <>
        <div style={{display: "flex" , columnGap: "25px"}}>
        <SettingsList />
        <CampersList />
        </div>
    </>
  );
}
