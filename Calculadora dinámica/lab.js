function get_element_li (name, price) {
    return `<li class="added-item">name: ${name} price: ${price}  <button class="remove-item">remove</button></li>`
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
      
      //Crear la lista
      let item_list = document.getElementById("items");
      let item_element = document.createElement("li");
      item_element.innerHTML = lista;
      item_list.appendChild(item_element);

      //We need to add teh event listener inside the function so it knows which node to remove
      let btn = item_element.getElementsByClassName("remove-item")[0];
      btn.addEventListener("click", remove_item());



    

      //add event listener to the button inside the element just added with the remove_item function
      //add the value to the total
      
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
  
  let remove_item  = (node_to_remove) => {
  
  }