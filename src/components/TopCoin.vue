<template>
   <tr>
    <td><img :src="logo" alt="logo"></td>
    <td>{{ coinName }}</td>
    <td>{{ symbol }}</td>
    <td :class="cellClass">{{ chgPrice }}</td>
    <td>{{ mktCap }}</td>
   </tr>   
</template>

<script>
    export default {
        name: "TopCoin",
        props: {
            logo: String,
            coinName: String,
            symbol: String,
            dftPrice: Number,
            mktCap: String
            
        },
        data(){
            return {
                price: this.dftPrice.toFixed(4),
                flag: ''
            }
        },
        sockets: {
            connect: function () {
                //console.log('socket connected')
            }
        },
        created() {
            this.$socket.emit('SubAdd', {subs:[`5~CCCAGG~${this.symbol}~USD`]})
               
         },
        computed: {
            chgPrice() {
               this.sockets.subscribe("m", (message) => {
                       let msg = message;
                       let valuesArray = msg.split("~");
                       if(valuesArray[4] == 1 && valuesArray[2] == this.symbol) {
                           this.price = valuesArray[5];
                           this.flag = 'rise';
                       } else if(valuesArray[4] == 2 && valuesArray[2] == this.symbol){
                          this.price = valuesArray[5];
                          this.flag = 'drop';
                       }
               })
                   
               return this.price;   
            },
            cellClass() {
                let currentСlass = '';
                if(this.flag == 'rise') {
                    currentСlass = 'cellClassRise';
                    setTimeout(() => (this.flag = 'noChg'), 300);
                }
                if(this.flag == 'drop') {
                    currentСlass = 'cellClassDrop';
                    setTimeout(() => (this.flag = 'noChg'), 300);
                }
                if(this.flag == 'noChg') {
                    currentСlass = 'cellClassNoChg'
                }
                return currentСlass;
            }
        }
    }
</script>

<style>
    img {
        width: 20px;
        height: 20px;
    }
    
    .cellClassNoChg {
        background-color: none;
    }
    
    .cellClassRise {
        background-color: #8bd98b;
    }
    
    .cellClassDrop {
        background-color: #f4a4a4;
    }
</style>