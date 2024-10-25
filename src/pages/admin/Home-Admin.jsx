import React from "react";

//react-admin
import { Admin, Resource, } from "react-admin";
import dataProvider from '../../functions/customDataProvider'; // fetch-data แบบ custom สำหรับใช้กับ react-admin

//Components
import { UserField, CategoryField, AssetsField } from "../../components/admin/ListData";
import { CategoryCreate } from "../../components/admin/CreateData";
import { CategoryEdit } from "../../components/admin/EditData";


function HomeAdmin() {
  return (
    <Admin basename="/admin-bank" dataProvider={dataProvider} >
      <Resource name="user" list={UserField} />
      <Resource name="category" list={CategoryField} create={CategoryCreate} edit={CategoryEdit} />
      <Resource name="assets" list={AssetsField} />
    </Admin>
  );
}

export default HomeAdmin;
