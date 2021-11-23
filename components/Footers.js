app.component('footer-component', {
    props: ['valor', 'fecha'],
    template: `<div class="bg-dark py-3 mt-2 text-white">       
    <h1> {{titulo}} {{valor}} </h1>
    <p> {{fecha}} </p>
</div>`,
    data() {
        return {
            titulo: 'Footer of Pokemons by emc',
        }
        }
});
