// Dependencias.

// Definición...
const fetchProducts = async () => {
  console.log("[] API HANDLER: fetchProducts");
  return new Promise(async (resolve, reject) => {
    try {
      resolve({});
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

// Exportación.
export default fetchProducts;
