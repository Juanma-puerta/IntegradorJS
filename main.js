import { setInLocalStorage } from "./src/persistence/localstorage.js";
import { renderCategories } from "./src/services/categories.js";
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
//---------PRODUCT --------- //

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click",()=>{
    openModal();    

})

//---------POPUP --------- //

const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click",()=>{
    handleCancelButton();    

})

const handleCancelButton = () => {
    closeModal();
}


//---------FUNCIONES ABRIR Y CERRAR MODAL ---------//
export const openModal = () =>{
    const modal= document.getElementById("modalPopUp");
    modal.style.display= "flex";
}

export const closeModal = () =>{
    const modal= document.getElementById("modalPopUp");
    modal.style.display= "none";
}

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
     imagen = document.getElementById("img"),
     precio = document.getElementById("precio"),
     categories = document.getElementById("categoria");

     nombre.value = "";
     imagen.value = "";
     precio.value = "0";
     categories.value = "Seleccione una categoria";
}

//---------GUARDAR O MODIFICAR ELEMENTOS ---------//

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () =>{
    handleSaveOrModifyElements();
});
const handleSaveOrModifyElements = () => {
const nombre = document.getElementById("nombre").value,
     imagen = document.getElementById("img").value,
     precio = document.getElementById("precio").value,
     categories = document.getElementById("categoria").value;
     let object= null;
     if(productoActivo){
        object ={
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories,
        }
     }else{
        object= {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories,
         };
     }

     

     setInLocalStorage(object);
     handleGetProductsToStore();
     closeModal();
};


