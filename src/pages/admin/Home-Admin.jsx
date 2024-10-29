import React from "react";

//react-admin
import { Admin, Resource, } from "react-admin";
import { dataProvider } from '../../functions/admin/dataProvider'; // function ที่ติดต่อกับหลังบ้านสำหรับใช้กับ react-admin
import { authProvider } from "../../functions/admin/authProvider"; // function auth

//Components
import { UserField, CategoryField, AssetsField } from "../../components/admin/ListData";
import { AssetsCreate, CategoryCreate } from "../../components/admin/CreateData";
import { AssetsEdit, CategoryEdit, UserEdit } from "../../components/admin/EditData";
import Login from "../auth/Login";
//Icon
import { FiUsers, FiLayers, FiHome } from "react-icons/fi";


function HomeAdmin() {
  return (
    <Admin basename="/admin" authProvider={authProvider} loginPage={Login} dataProvider={dataProvider} >
      <Resource name="user" list={UserField} edit={UserEdit} icon={FiUsers} />
      <Resource name="category" list={CategoryField} create={CategoryCreate} edit={CategoryEdit} icon={FiLayers} />
      <Resource name="assets" list={AssetsField} create={AssetsCreate} edit={AssetsEdit} icon={FiHome} />
    </Admin>
  );
}

export default HomeAdmin;
