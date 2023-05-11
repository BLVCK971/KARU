type ThemeColors = {
  "--primary": string;
  "--secondary": string;
  "--tertiary": string;
  "--quaternary": string;
  "--quinary": string;
};

type Themes = {
  [key: string]: ThemeColors;
};

const themes: Themes = {
    All: {
      "--primary": "var(--all_1)",
      "--secondary": "var(--all_2)",
      "--tertiary": "var(--all_3)",
      "--quaternary": "var(--all_4)",
      "--quinary": "var(--all_5)",
    },
    Food: {
      "--primary": "var(--food_1)",
      "--secondary": "var(--food_2)",
      "--tertiary": "var(--food_3)",
      "--quaternary": "var(--food_4)",
      "--quinary": "var(--food_5)",
    },
    Clothes: {
      "--primary": "var(--cloth_1)",
      "--secondary": "var(--cloth_2)",
      "--tertiary": "var(--cloth_3)",
      "--quaternary": "var(--cloth_4)",
      "--quinary": "var(--cloth_5)",
    },
    MakeUp: {
      "--primary": "var(--makeup_1)",
      "--secondary": "var(--makeup_2)",
      "--tertiary": "var(--makeup_3)",
      "--quaternary": "var(--makeup_4)",
      "--quinary": "var(--makeup_5)",
    },
    Craft: {
      "--primary": "var(--craft_1)",
      "--secondary": "var(--craft_2)",
      "--tertiary": "var(--craft_3)",
      "--quaternary": "var(--craft_4)",
      "--quinary": "var(--craft_5)",
    },
  };
  
export default themes;