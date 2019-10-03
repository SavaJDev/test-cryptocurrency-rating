<template>
     <div class="container">
        <div class="row">
            <div class="col-sm-12">
              <h1>Toplist cryptocurrency</h1>
              <router-link :to="{name: 'allcoins'}">
                  <p>All cryptocurrencies</p>
              </router-link>
               <hr>
               <table class="table table-bordered table-hover">
                 <thead>
                   <tr>
                     <th>Logo</th>
                     <th>Name</th>
                     <th>Ticker</th>
                     <th>Price(USD)</th>
                     <th>Mkt. cap.</th>
                    </tr>
                  </thead>
                   <tbody>
                       <TopCoin v-for="(coin, i) in topCoins"
                              :key="i"
                              :logo="url + coin.ImageUrl"
                              :coinName="coin.FullName"
                              :symbol="coin.Name"
                              :dftPrice="coin.Price"
                              :mktCap="coin.MktCap"
                         />                         
                  </tbody>
               </table>
               <hr>    
         </div>
        </div>
     </div>
</template>

<script>
    import TopCoin from '~/components/TopCoin';
    import {mapGetters} from 'vuex';

     export default {
        data() {
            return {
                url: 'https://www.cryptocompare.com/'
            }
        }, 
         
        components:{
            TopCoin
        },  
        
        methods: {
            
        }, 
         
        computed: {
            ...mapGetters ({
                topCoins: 'topcoins/allCoins'
            })
        }
}
</script>

<style>
    table {
        text-align: center;
    }
</style>