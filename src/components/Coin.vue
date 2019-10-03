<template>
   <tr>
    <td><img :src="logo" alt="logo"></td>
    <td>{{ coinName }}</td>
    <td>{{ symbol }}</td>
   </tr>   
</template>

<script>
    export default {
        name: "Coin",
        props: {
            logo: String,
            coinName: String,
            symbol: String,
        },
        data(){
            return {
                
            }
        }
    }
</script>

<style>
    img {
        width: 20px;
        height: 20px;
    }
</style>