export const createMenu = () => {
    const content = document.querySelector("#content");
    content.classList.add("menu");


    const title = document.createElement("div");
    title.className = "title";
    content.appendChild(title);
    title.textContent = "Menu";

    
    const dish = document.createElement("div");
    content.appendChild(dish);
    const dishName = document.createElement("div");
    dish.appendChild(dishName);
    dishName.textContent = "Ravioli";
    const dishInfo = document.createElement("div");
    dish.appendChild(dishInfo);
    dishInfo.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor purus vitae risus ultrices, vitae efficitur ligula accumsan. Maecenas ac mauris justo. Integer in dolor non sapien tincidunt convallis ut vitae est. Cras felis mi,"
}