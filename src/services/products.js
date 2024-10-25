

import Swal from "sweetalert2";
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";




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

     Swal.fire({
        title: "Godines!",
        text: "Producto guardado!",
        icon: "success"
      });

     setInLocalStorage(object);
     handleGetProductsToStore();
     closeModal();
};

//Funcion Eliminar elemento

export const handleDeleteProduct =  () =>{
    Swal.fire({
        title: "¿Estás seguro?",
        text: "Mirá que no hay vuelta atrás eh!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, que se borre!"
      }).then((result) => {
        if (result.isConfirmed) {
            const products =  handleGetProductLocalStorage();
            const result = products.filter((el)=> el.id !== productoActivo.id);
            //seteamos el nuevo array
            localStorage.setItem("products", JSON.stringify(result)); 
            const newProducts =  handleGetProductsToStore();
            handleRenderList(newProducts);
        }else{
            closeModal();
        }
        
      });
}

