import React, { useEffect, useState } from "react";

//Components
import {
  Button,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Uploadfile from "./Uploadfile";
//Functions
import { listCategory } from "../../functions/category";
import { createAssets } from "../../functions/assets";

function CreateAssets({ setModal }) {
  const [categorys, setCategorys] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    ownerName: localStorage.getItem("username"),
    ownerContact: "",
    categoryId: "",
    priceRent: 0,
    priceSale: 0,
    image: [],
    description: "",
  });

  const fetchCategory = () => {
    listCategory()
      .then((res) => setCategorys(res.data))
      .catch((error) => console.log("Error", error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createAssets(formData)
      .then((res) => {
        alert("Create post success");
        setModal(false)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 relative">
      {/* Loadding */}
      {isLoading && (
        <CircularProgress
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full"
          size={120}
        />
      )}

      <div className="space-x-5 flex">
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          className="w-full"
          required
          onChange={handleChange}
        />
        <TextField
          name="location"
          label="Location"
          variant="outlined"
          className="w-full"
          required
          onChange={handleChange}
        />
      </div>

      <div className="space-x-5 flex">
        <TextField
          name="ownerName"
          defaultValue={formData?.ownerName}
          variant="filled"
          className="w-full"
          disabled
        />
        <TextField
          name="ownerContact"
          label="Owner contact"
          variant="outlined"
          className="w-full"
          required
          onChange={handleChange}
        />
      </div>

      <div className="space-x-5 flex">
        <Select
          value={formData.categoryId}
          onChange={(e) =>
            setFormData({ ...formData, categoryId: e.target.value })
          }
          name="categoryId"
          className="w-full text-black"
          displayEmpty
          required
        >
          <MenuItem value="">
            <em>Category None</em>
          </MenuItem>
          {categorys &&
            categorys.map((item) => (
              <MenuItem value={item?.id} key={item.id}>
                {item?.name}
              </MenuItem>
            ))}
        </Select>

        <TextField
          type="number"
          name="priceRent"
          label="Price rent"
          variant="outlined"
          className="w-full"
          onChange={handleChange}
        />

        <TextField
          type="number"
          name="priceSale"
          label="Price sale"
          variant="outlined"
          className="w-full"
          onChange={handleChange}
        />
      </div>

      <TextField
        multiline
        rows={2}
        name="description"
        label="Description"
        variant="outlined"
        className="w-full"
        required
        onChange={handleChange}
      />

      {/* Input สำหรับอัปโหลดรูปภาพ */}
      <Uploadfile
        formData={formData}
        setFormData={setFormData}
        setIsLoading={setIsLoading}
      />

      <Button type="submit" variant="contained" disabled={isLoading}>
        Submit
      </Button>
    </form>
  );
}

export default CreateAssets;
