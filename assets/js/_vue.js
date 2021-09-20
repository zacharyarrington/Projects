

var template1 = new Vue({
    template: '<div>{{ hi }}</div>'
})

const Home = {
    template: '<p>home</p>'
}
const About = { template: '<p>about</p>'}
const NotFound = { template: '<p>Page not found</p>' }

const routes = {
    '/' : Home,
    '/index.html' : Home,
    '/about' : About
}

var app = new Vue({
    el: "#content",
    data: {
        // currentRoute: window.location.pathname,

        title: "Hello, World.",
        temp: template1
    }
    // },
    // computed: {
    //     ViewComponent() {
    //         return routes[this.currentRoute] || NotFound
    //     }
    // },
    // render (h) {return h(this.ViewComponent)}
})