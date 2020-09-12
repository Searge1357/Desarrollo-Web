function get_element_li (name, price) {
    return `<li class="added-item">name: ${name} price: <span class= "price"> ${price} </span>  <button class="remove-item">remove</button></li>`
  }

  

  let add_item_to_list_with_template = () => {
    return (boton) => {
      
      //add the item to the list
      var item_name = document.querySelector("#item-name").value;
      var item_value = document.querySelector("#item-value").value;
      var lista = get_element_li(item_name, item_value);  

      //Checar si son datos correctos
      var cuadrito = document.getElementById("container"); 
      if (item_name.length == 0 || item_value.length == 0 || isNaN(item_value))
      {
        cuadrito.style.borderColor = "red"; 
        alert("Datos Incorrectos"); 
        return false; 
      } 

      cuadrito.style.borderColor = "transparent"; 
      
      //Crear la lista
      var items = document.getElementById("items");
      var elemento = document.createElement("li");
      elemento.innerHTML = lista;
      items.appendChild(elemento);


      //add event listener to the button inside the element just added with the remove_item function
      var Remover = elemento.getElementsByClassName("remove-item")[0];
      Remover2= Remover.addEventListener("click", remove_item());


      //add the value to the total
      sumatoria();
      
    }
  }

  boton = document.getElementById("add-item").addEventListener("click", add_item_to_list_with_template()); 
  /*
   for removing elements could be this way
    let element_to_delete = document.querySelector("selector").lastElementChild;
    element_to_delete.parentNode.removeChild(element_to_delete);
    or we could use ChildNode.remove()
    https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
  */
  
  var remove_item  = () => {
      return (boton) => {
          //boton.target.parentNode.remove(); 
        var hijo = boton.target; 
        var padre= hijo.parentNode.parentNode; 
        padre.remove();

        sumatoria(); 
      }
  }

  function sumatoria (){
      var items = document.getElementById("items").getElementsByClassName("added-item");  
      var precioFinal=0; 
      var numberItems = items.length; 

      for (var i=0; i<numberItems; i++){
          let Sumatoria = parseFloat(items[i].getElementsByClassName("price")[0].innerHTML); //items[i].getElementsByClassName("price")[0] Si uso solo eso me despliega html collection, por eso uso inner html
          console.log(Sumatoria);
          precioFinal = precioFinal + Sumatoria;  
      }
      document.getElementById("res").value= precioFinal; 
  }

  