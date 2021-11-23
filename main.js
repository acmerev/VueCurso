const app = Vue.createApp({
    data() {
        return {
            titulo: 'Bank of Pokemons by emc',
            cantidad: 0,
            enlace: 'https://pokeapi.co/api/v2/pokemon/',
            estado: true,
            desactivar: false,
            pokemon: ['Transaccion', 'Retiro', 'Deposito'],
        }
    },
    methods: {
        cambiarEstado() {
            this.estado = !this.estado;
        },
        camiarCantidad(valor) {
            this.cantidad = this.cantidad + valor;
        },
        hacerRetiro(valor) {
            if (this.cantidad == 0) {
                this.desactivar = true;
                alert('No hay mas pokemons');
                return
            }
            this.cantidad = this.cantidad - valor;
        }
    },
    computed: {
        colorCantidad() {
            return this.cantidad > 0 ? 'text-success' : 'text-danger';
        },
        tituloMayuscula() {
            return this.titulo.toUpperCase();
        }
    },

 
})