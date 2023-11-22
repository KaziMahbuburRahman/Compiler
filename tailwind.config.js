import keepPreset from "keep-react/src/keep-preset.js";
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
],
    
    theme: {
        extend: {},
    },
    presets: [keepPreset],
};
