const vm = new Vue({
    el: '#app',
    data: {
        people: null,
    },
    methods: {
        async secondPerson() {
            const res = await fetch('https://raw.githubusercontent.com/DaKoala/fetch-example/master/people.json');
            const json = await res.json();
            const person = json[1];
            alert(`我是${person.name}，我今年${person.age}岁。`);
        }
    },
    async created() {
        const res = await fetch('https://raw.githubusercontent.com/DaKoala/fetch-example/master/people.json');
        this.people = await res.json();
    }
});
