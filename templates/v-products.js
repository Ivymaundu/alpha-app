
let links = [
    "https://unpkg.com/vue@3/dist/vue.global.js",
    "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"
]

links.forEach(function(link) {
    let script = document.createElement("script");
        script.src = link;
        document.body.appendChild(script)
});

Vue.createApp({
    data(){
        let name= "68"
        console.log("i am connected")
        return{name}
    }
}).mount('#app')
