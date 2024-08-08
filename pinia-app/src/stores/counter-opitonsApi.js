import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter', {
  //state Declaration
  state: () => {
    //reactive state , looks like optional api
    return {
      count: 10
    }
  },
  //actions declaration: biz logic
  actions: {
    increment() {
      return this.count++
    },
    decrement() {
      return this.count--
    }
  },
  //computed Properties:(getters)
  getters: {
    doubleIt: state => {
      return state.count * 2
    }
  }
})