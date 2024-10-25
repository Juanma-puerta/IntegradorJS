//---------POPUP --------- //

import { productoActivo, setproductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click",()=>{
    handleCancelButton();    

})

const handleCancelButton = () => {
    closeModal();
    setproductoActivo();
}


//---------FUNCIONES ABRIR Y CERRAR MODAL ---------//
export const openModal = () =>{
    const modal= document.getElementById("modalPopUp");
    modal.style.display= "flex";

    const buttonDelete = document.getElementById("deleteButtton");
    if(productoActivo){
        buttonDelete.style.display="block";
    }else{
        buttonDelete.style.display="none";
    }

    if(productoActivo){
     const nombre = document.getElementById("nombre"),
     imagen = document.getElementById("img"),
     precio = document.getElementById("precio"),
     categories = document.getElementById("categoria");

     nombre.value = productoActivo.nombre;
     imagen.value = productoActivo.imagen;
     precio.value = productoActivo.precio;
     categories.value =productoActivo.categories;
    }
}

export const closeModal = () =>{
    const modal= document.getElementById("modalPopUp");
    modal.style.display= "none";
    resetModal();
}

const resetModal = () => {
    const nombre = document.getElementById("nombre"),
     imagen = document.getElementById("img"),
     precio = document.getElementById("precio"),
     categories = document.getElementById("categoria");

     nombre.value = "";
     imagen.value = "";
     precio.value = "0";
     categories.value = "";
}

const deleteButton = document.getElementById("deleteButtton");
deleteButton.addEventListener("click", ()=>{
    handleButtonDelete();
});
const handleButtonDelete = ()=>{
    handleDeleteProduct();
};

