// src/state.js
import { reactive } from 'vue'

export const state = reactive({
  dropdownVisible2: false
})

export const toggleDropdown2 = () => {
  state.dropdownVisible2 = !state.dropdownVisible2
}
