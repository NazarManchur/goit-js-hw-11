import axios from 'axios';
const popularRecipesWrapper = document.querySelector(".popular-list");

if (popularRecipesWrapper) {
  popularRecipesRender();
}
async function getRecipes() {
  const POPUPLAR_API = 'https://tasty-treats-backend.p.goit.global/api/recipes/popular';
  try {
    const response = await axios.get(POPUPLAR_API);
    return response.data;
  } catch (error) {
    console.log("error1")
  }
}
async function popularRecipesRender() {
  try {
    const data = await getRecipes();
    const markup = popularRecipesMarkup(data);
    popularRecipes.insertAdjacentHTML('beforeend', markup.join(''));
  } catch (error) {
    console.log("error2")
  }
}
function popularRecipesMarkup(recipes) {
  return recipes.map(({ title, description, preview }) => {
    return `
         <li>
            <a href="#!">
               <img src="${preview}" alt="${title}">
               <h3>${title}</h3>
               <p>${description}</p>
            </a>
         </li>`;
  });
}