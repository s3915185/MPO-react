import axios from "axios";

const PRODUCTS_REST_API_URL = "http://localhost:8080/api/products";
const CATEGORIES_REST_API_URL = "http://localhost:8080/api/categories";
const INVENTORIES_REST_API_URL = "http://localhost:8080/api/inventories";
const MOS_REST_API_URL = "http://localhost:8080/api/mo";
const MPOS_REST_API_URL = "http://localhost:8080/api/mpo";

class ProductService {

    getProducts() {
        return axios.get(PRODUCTS_REST_API_URL);
    }
    getCategories() {
        return axios.get(CATEGORIES_REST_API_URL);
    }
    getInventories() {
        return axios.get(INVENTORIES_REST_API_URL);
    }
    getManufacturingOrders() {
        return axios.get(MOS_REST_API_URL);
    }
    getMaterialPurchaseOrders() {
        return axios.get(MPOS_REST_API_URL);
    }
}

export default new ProductService();