<script setup>
import products from '../assets/productos.json'
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
let nombre=ref("")
let descripcion=ref("")
const route = useRoute()
for (let product of products){
    if (product.id==route.params.id){
        nombre=product.name
        descripcion=product.description
    }
}

</script>

<template>
    <h1>ID: {{ $route.params.id }}</h1>
    <p>Nombre: {{ nombre }}</p>
    <p>Descripcion:{{ descripcion }}</p>

</template>