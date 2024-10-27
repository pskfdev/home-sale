import React, { useEffect, useState } from "react";

//components
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
} from "react-admin";
import UploadfileEdit from "./UploadfileEdit";

import { useParams } from "react-router-dom";

//Functions
import { readAssets } from "../../functions/product";

const TitleUser = () => {
  const record = useRecordContext();

  return <span>Edit User / {record && record?.name}</span>;
};

const TitleCategory = () => {
  const record = useRecordContext();

  return <span>Edit Category / {record && record?.name}</span>;
};

const TitleAssets = () => {
  const record = useRecordContext();

  return <span>Edit Assets / {record && record?.title}</span>;
};

export const UserEdit = () => {
  return (
    <Edit title={<TitleUser />}>
      <SimpleForm>
        <TextInput source="email" label="Email" disabled />
        <TextInput source="name" label="Name" />
        <SelectInput source="role" label="Role" choices={["user", "admin"]} />
      </SimpleForm>
    </Edit>
  );
};

export const CategoryEdit = () => {
  return (
    <Edit title={<TitleCategory />}>
      <SimpleForm>
        <TextInput source="name" label="Category Name" validate={required()} />
      </SimpleForm>
    </Edit>
  );
};

export const AssetsEdit = () => {
  const { id } = useParams();
  const [image, setImage] = useState();

  const fetchData = () => {
    readAssets(id)
      .then((res) => {
        setImage(res.data.images);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Edit title={<TitleAssets />}>
      <SimpleForm /* onSubmit={handleSubmit} */>
        <TextInput source="title" label="Title" validate={required()} />
        <TextInput source="location" label="Location" validate={required()} />
        <TextInput
          source="ownerName"
          label="Owner name"
          validate={required()}
        />
        <TextInput
          source="ownerContact"
          label="Owner contact"
          validate={required()}
        />
        <ReferenceInput
          source="categoryId"
          reference="category"
          label="Category"
        >
          <SelectInput optionText="name" defaultValue="categoryId" />
        </ReferenceInput>
        <TextInput source="priceRent" label="Price rent" />
        <TextInput source="priceSale" label="Price sale" />
        <TextInput
          multiline
          minRows={2}
          source="description"
          label="Description"
          validate={required()}
        />

        {/* Input สำหรับอัปโหลดรูปภาพ */}
        {image && <UploadfileEdit image={image} />}
      </SimpleForm>
    </Edit>
  );
};
