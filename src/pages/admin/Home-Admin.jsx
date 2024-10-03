import React from "react";

//react-admin
import { Admin, Resource } from "react-admin";
import customDataProvider from '../../functions/customDataProvider'; // fetch-data แบบ custom สำหรับใช้กับ react-admin

//Components
import ListData from "../../components/admin/ListData";


function HomeAdmin() {
  return (
    <Admin basename="/admin-bank" dataProvider={customDataProvider} >
      <Resource name="data" list={ListData} />
    </Admin>
  );
}

export default HomeAdmin;
