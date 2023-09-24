import axios from "axios";
const config = {
  headers: {
    authorId: 1,
  },
};

export const getAllProducts = () => {
  return axios.get(
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products",
    config
  );
};
