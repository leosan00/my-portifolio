import { writable } from "svelte/store";
import { browser } from '$app/environment';



let stored;

stored = browser ? window.localStorage.getItem('tab') ?? 'active-home' : 'active-home';

export let currentTab= writable(stored);

currentTab.subscribe((value) => {
    if (browser) {
      window.localStorage.setItem('tab', value);
    }
  });
