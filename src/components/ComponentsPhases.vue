<script>
export default {
    props: {
        //Titulo
        title: {
            type: String,
            required: true,
        },
        //Description
        description: {
            type: String,
            required: true,
        },
        textOculto: {
            type: String,
            required: true,
        },
        ocultar: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            look: false,
        };
    },
    methods: {
        mostrarTexto() {
            this.look = !this.look;
        },
    }
}

</script>

<template>
    <div class="componentes">
        <div class="divDesc">
            <div class="circulo-indicador"></div>
            <p>
                <b>{{title}}</b>
                <br>
            <p v-show="look" class="texto-oculto" transition="fade">
                {{ textOculto }}
            </p>
            </p>
        </div>
    </div>
    <buttom :class="ocultar" v-on:click="mostrarTexto" class="btn centrar">READ {{ look ? "LESS" : "MORE" }}</buttom>
</template>



<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap');

img {
    width: 100%;
    height: 100%;
}

.componentes {
    font-family: 'Work Sans', sans-serif;
    position: relative;
    z-index: 7;
}

.divDesc {
    flex-direction: column;
    position: relative;
    text-align: center;
    text-transform: capitalize;
    display: flex;
    z-index: 4;
    margin: 10px;
    color: white;
}

.divDesc p {
    font-size: 1.3vw;
    font-family: Roboto;
}

.divDesc b {
    font-size: 1.8vw;
    font-family: "Work Sans";
}

.circulo-indicador {
    position: absolute;
    width: 3rem;
    border-radius: 50%;
    border: 5px solid white;
    background: linear-gradient(to left,
            #029F50 0%,
            #0A664E 50%,
            #0E444D 80%);
    height: 3rem;
    bottom: 100%;
    left: 40%;
    align-items: center;
    z-index: 10;
}

.btn {
    position: fixed;
    background: linear-gradient(90deg,
            rgb(18, 17, 65) 0%,
            rgba(1, 209, 88, 1) 100%);
    top: 0%;
    left: 0%;
    border-radius: 1.5vw;
    cursor: pointer;
    width: 45%;
    height: 5%;
    font-size: 4vw;
    font-family: "WorkSans", sans-serif;
    align-items: center;
}

.btn:hover {
    box-shadow: inset 0 0 60px whitesmoke, inset 20px 0 80px rgb(6, 38, 58),
        inset -20px 0 80px rgb(7, 64, 25), inset 20px 0 300px rgb(5, 12, 28),
        inset -20px 0 300px rgb(4, 41, 10), 0 0 50px #fff,
        -10px 0 80px rgb(1, 13, 37), 10px 0 80px rgb(1, 64, 12);
    transition: 0.5s ease-out;
}
</style>