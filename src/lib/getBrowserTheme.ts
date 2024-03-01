import { browser } from "$app/environment";

export function getBrowserTheme() {
    if (!browser) {
        throw new Error("browser not found");
    }

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        console.log("dark theme");
        return;
    }
    console.log("Light theme")
}
