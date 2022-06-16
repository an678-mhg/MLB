import axiosClient from "./axiosClient";

export const uploadMultiFile = async (fileList) => {
  try {
    const formData = new FormData();

    for (let i = 0; i < fileList.length; i++) {
      formData.append("multi", fileList[i]);
    }

    const res = await axiosClient.post("/api/upload/multi", formData);
    return res.data.fileName;
  } catch (error) {
    console.log(error.response);
  }
};

export const uploadOneFile = async (file) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axiosClient.post("/api/upload", formData);
    return res.data.fileName;
  } catch (error) {
    console.log(error.response);
  }
};
