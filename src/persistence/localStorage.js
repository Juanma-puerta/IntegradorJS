//---------LOCAL STORAGE ---------//

export const handleGetProductLocalStorage= () =>{
    const products= JSON.parse(localStorage.getItem("products"));

    if(products){
        return products
    }else{
        return[];
    }

};

//---------GUARDAR EN LOCAL STORAGE ---------//


  //recibimos un producto
export const setInLocalStorage = (productIn) =>{
    //traemos los elementos
    
    let productsInLocal = handleGetProductLocalStorage(); 

    const existingIndex = productsInLocal.findIndex((productsInLocal)=>

        productsInLocal.id === productIn.id
    )
       //verificamos si existe
    if(existingIndex !== -1){
        //SI existe, debe reemplazarse
        productsInLocal[existingIndex] =   productIn;   
    }else{
         //SINO, debe agregarse

         productsInLocal.push(productIn);

    }
  //Seteamos el nuevo array
 localStorage.setItem("products", JSON.stringify(productsInLocal)); 
}