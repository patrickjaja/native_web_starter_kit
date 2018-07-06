import { Greeting } from "../Communication/Greeting.js";

document.querySelector('#app').innerHTML = '<custom-greeting></custom-greeting>';

export function say (name) {
    console.log(name);
}