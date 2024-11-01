export const createContact = () => {
    const content = document.querySelector("#content");
    content.classList.add("menu");


    const title = document.createElement("div");
    title.className = "title";
    content.appendChild(title);
    title.textContent = "Contact";

    
    const dish = document.createElement("div");
    content.appendChild(dish);
    const dishName = document.createElement("div");
    dish.appendChild(dishName);
    dishName.textContent = "Phone number";
    const dishInfo = document.createElement("div");
    dish.appendChild(dishInfo);
    dishInfo.textContent = "123456789"
}