import Welcome from "./Welcome.js"

//component must be exported using export default
export default {
    components: {
        Welcome
    },
    template: `
        <h1>Vue Component</h1>
        <Welcome></Welcome>
    `
    //rest of the options goes here
}