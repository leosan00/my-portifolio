import { writable } from "svelte/store";
import { quadInOut } from 'svelte/easing';
import { browser } from '$app/environment';


 export let darkMode= writable(false);

 let theme = browser ? window.localStorage.getItem('theme') ?? 'light' : 'light';


 let isDark = false;

if (typeof window !== 'undefined') {
    isDark = (theme==='dark');
   
    setTheme();
}

export function toggleDarkMode(){
    isDark = !isDark;
    

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    setTheme();
   
}

function setTheme(){
   isDark
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');

        darkMode.set(isDark);
}

export function spin(node, { duration = 1000 }) {
    return {
        duration,
        css: t => {
            const eased = quadInOut(t);
            const o = +getComputedStyle(node).opacity;

            return `
                transform: scale(${eased}) rotate(${eased* 1080}deg);
                opacity: ${t * o};`
        }
    };
}
