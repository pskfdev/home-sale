import React from "react";
//Components
import { Box, Modal } from "@mui/material";
import { FiX } from "react-icons/fi";
import CreateAssets from "../form/CreateAssets";

function ModalCreateAssets({ modal, setModal }) {
  return (
    <Modal open={modal} onClose={() => setModal(false)} className="relative">
      <Box className="w-full lg:w-10/12 bg-white rounded-md p-5 shadow-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-center uppercase pb-5 text-blue-800">
          Create post
        </h2>
        <FiX
          className="absolute top-2 right-2 text-blue-800 cursor-pointer hover:text-red-500"
          size={25}
          onClick={() => setModal(false)}
        />

        <CreateAssets setModal={setModal} />
      </Box>
    </Modal>
  );
}

export default ModalCreateAssets;
