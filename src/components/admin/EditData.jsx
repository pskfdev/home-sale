import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//components
import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
  required,
  useRecordContext,
  useNotify,
  useRedirect,
  useDataProvider,
} from "react-admin";
import UploadfileEdit from "./UploadfileEdit";
import { CircularProgress } from "@mui/material";

//Functions
import { readAssets } from "../../functions/assets";

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

  const notify = useNotify();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    readAssets(id)
      .then((res) => {
        setImages(res.data.images);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  // Update assets to db
  const handleSubmit = async (data) => {
    try {
      if (data.priceRent?.includes(",") || data.priceSale?.includes(",")) {
        data.priceRent && (data.priceRent = Number(data.priceRent?.replace(/,/g, "")));
        data.priceSale && (data.priceSale = Number(data.priceSale?.replace(/,/g, "")));
      }

      const response = await dataProvider.update("assets", {
        id: id,
        data: {
          ...data,
          images: images,
        },
      });

      notify("Update Assets successfully");
      redirect("/admin/assets");
    } catch (error) {
      notify(`Error: ${error.message}`, { type: "warning" });
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <Edit title={<TitleAssets />}>
      {/* Loadding */}
      {isLoading && (
        <div className="w-full bg-black opacity-50 h-full absolute z-10">
          <CircularProgress
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            size={120}
          />
        </div>
      )}

      {/* Form edit assets */}
      <SimpleForm onSubmit={handleSubmit}>
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
        {images && (
          <UploadfileEdit
            images={images}
            setImages={setImages}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        )}
      </SimpleForm>
    </Edit>
  );
};
