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

export const createProduct = (data) => {
  return axios.post(
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products",
    data,
    config
  );
};

export const deleteProduct = (id) => {
  
  return axios.delete(
    `https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products?id=${id}`,
    config
  );
}
