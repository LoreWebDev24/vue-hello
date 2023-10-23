// INTRO VUE JS 

const { createApp } = Vue;

createApp ({
    data() {
        return {
            'strings': ['Pippo', 'Pluto', 'Paperino', 'Minnie'],
            'currentIndex': 0,
        }
    },
    methods: {
        increase() {
            this.currentIndex++;
        },
        decrease() {
            this.currentIndex--;
        }
    },
}).mount('#app')

