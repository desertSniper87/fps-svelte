import { writable } from "svelte/store";

export const token = writable(localStorage.getItem("token") || "");
export const farmer_id = writable(localStorage.getItem("farmer_id") || "");
