<script setup>
import productList from '@/assets/productos.json'
</script>

<template>
    <ul>
        <li v-for="product in productList" :key="product.id">
            <RouterLink :to="'/productDetail/'+product.id">
                {{ product.name }}
            </RouterLink>
        </li>
    </ul>
</template>