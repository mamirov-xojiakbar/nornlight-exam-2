// src/state.js
import { reactive } from 'vue'

export const state = reactive({
  dropdownVisible2: false,
  dropdownVisible3: false
})

export const toggleDropdown2 = () => {
  state.dropdownVisible2 = !state.dropdownVisible2
}

export const toggleDropdown3 = () => {
  state.dropdownVisible3 = !state.dropdownVisible3
}
