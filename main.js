
import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductsByName } from "./src/services/searchBar.js";
import { openModal } from "./src/views/modal.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import "./style.css";


//APLICACION//
export let categoriaActiva= null;

export const setCategoriaActiva = (categoriaIn) =>{
    categoriaActiva = categoriaIn; 
};

export let productoActivo= null;

export const setproductoActivo = (productoIn) =>{
    productoActivo = productoIn;
}
handleGetProductsToStore();

renderCategories();

//HEADER
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click",()=>{
    openModal();    

})

//ButtonSearch

const ButtonSearch= document.getElementById("buttonSearch");
ButtonSearch.addEventListener("click",()=>{
handleSearchProductsByName();  

})

