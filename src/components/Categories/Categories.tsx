import { createEffect, createSignal } from "solid-js";
import themes from "./themes";
import "./Categories.css";

export default function Header() {
  const [color, setColor] = createSignal("");
  const [current, setCurrent] = createSignal("All");

  const click = (category: string) => {
    setCurrent(category);
    const themeColors = themes[category];

    for (const [colorVariable, colorValue] of Object.entries(themeColors)) {
      document.documentElement.style.setProperty(colorVariable, colorValue);
    }

  };

  createEffect(() => {
    if (color() != "") {
      document.body.style.backgroundColor = color();
    }
  });
  
  return (
      <div class="Categories">
        <button class="AllButton" classList={{selected: current() === 'All'}} 
                onClick={() => {click('All')}}>
            <div class="AllText">Tous</div>
        </button>
        <button class="FoodButton" classList={{selected: current() === 'Food'}} 
                onClick={() =>{click('Food')}}>
          <div class="FoodText">Nourriture</div>
        </button>
        <button class="ClothesButton" classList={{selected: current() === 'Clothes'}} 
                onClick={() =>{click('Clothes')}}>
          <div class="ClothesText">Vêtements</div>
        </button>
        <button class="MakeUpButton" classList={{selected: current() === 'MakeUp'}} 
                onClick={() =>{click('MakeUp')}}>
          <div class="MakeUpText">Cosmétique</div>
        </button>
        <button class="CraftButton" classList={{selected: current() === 'Craft'}} 
                onClick={() =>{click('Craft')}}>
          <div class="MakeUpText">Artisanat</div>
        </button>
      </div>
  );
}
