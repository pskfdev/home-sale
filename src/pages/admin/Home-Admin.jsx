import React from "react";

//react-admin
import { Admin, Resource, } from "react-admin";
import dataProvider from '../../functions/customDataProvider'; // fetch-data แบบ custom สำหรับใช้กับ react-admin

//Components
import { UserField, CategoryField, AssetsField } from "../../components/admin/ListData";
import { AssetsCreate, CategoryCreate } from "../../components/admin/CreateData";
import { AssetsEdit, CategoryEdit, UserEdit } from "../../components/admin/EditData";
//Icon
import { FiUsers, FiLayers, FiHome } from "react-icons/fi";


function HomeAdmin() {
  return (
    <Admin basename="/admin-bank" dataProvider={dataProvider} >
      <Resource name="user" list={UserField} edit={UserEdit} icon={FiUsers} />
      <Resource name="category" list={CategoryField} create={CategoryCreate} edit={CategoryEdit} icon={FiLayers} />
      <Resource name="assets" list={AssetsField} create={AssetsCreate} edit={AssetsEdit} icon={FiHome} />
    </Admin>
  );
}

export default HomeAdmin;
