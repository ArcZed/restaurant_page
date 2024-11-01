import "./styles.css";
import {createHomepage} from "./createContent";
import { createMenu } from "./menu";
import { createContact } from "./contact";

// const home = document.querySelector(".home");
// const menu = document.querySelector("menu");
// const contact = document.querySelector(".contact");

const btns = document.querySelectorAll("button");
const content = document.querySelector("#content");
createHomepage();

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(btn.className);
        switch (btn.className) {
            case "home":
                content.innerHTML = "";
                createHomepage();
                break;
            case "menu":
                content.innerHTML = "";
                createMenu();
                break;
            case "contact":
                content.innerHTML = "";
                createContact();
                break;
            default:
                break;
        }
    });
});


