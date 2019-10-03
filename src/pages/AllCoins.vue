<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
               <h1>All cryptocurrencies</h1>
                  <router-link :to="{name: 'topcoins'}">
                      <p>Back to toplist cryptocurrency</p>
                  </router-link>
               <hr> 
                 <table class="table table-bordered table-hover">
                     <thead>
                       <tr>
                         <th>Logo</th>
                         <th>Name</th>
                         <th>Ticker</th>
                        </tr>
                      </thead>
                       <tbody>
                           <Coin v-for="(coin, i) in coins"
                                  :key="i"
                                  :logo="url + coin.ImageUrl"
                                  :coinName="coin.FullName"
                                  :symbol="coin.Name"
                             />                         
                      </tbody>
                  </table>
               <hr>
            </div>
        </div>
    </div>
</template>

<script>
    import Coin from '~/components/Coin';
    import {mapGetters} from 'vuex';
    
    export default {
        data () {
            return {
                url: 'https://www.cryptocompare.com/'
            }
        },
        components: {
             Coin
        }, 
         
        computed: {
            ...mapGetters ({
                coins: 'coins/allCoins'
            })
        }
    }
</script>

<style>
    table {
        text-align: center;
    }
</style>