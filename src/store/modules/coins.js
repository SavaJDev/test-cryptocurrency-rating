import server from '~/server.js'

export default {
    namespaced: true,
    state: {
        allCoins: '',
        allCoinsInfo: []
        
    },
    getters: {
        allCoins(state){
            return state.allCoinsInfo;
        }
        
    },
    mutations: {
        loadAllCoins(state, coins){
            let arrCoins = Object.keys(coins).slice(10,600);
            
            let strCoins = arrCoins.join(',');
            state.allCoins = strCoins;
            //console.log('allCoins', state.allCoins);
        },
        
        loadCoinsInfo(state, coinsFullInfo){
            let coinsInfo = coinsFullInfo.map((coinInfo) => {
               return {
                       Name: coinInfo.CoinInfo.Name,
                       ImageUrl: coinInfo.CoinInfo.ImageUrl,
                       FullName: coinInfo.CoinInfo.FullName,   
               }
            }) 
            state.allCoinsInfo = coinsInfo;
            
        }
        
    },
    actions: {
        
        loadAllCoins(store){
            return new Promise(function(resolve,reject){
                        server.get('/all/coinlist'
                          ).then((response) => {
                        store.commit('loadAllCoins', response.data.Data);
                        resolve();
                })   
            })  
        },
        loadCoinsInfo(store){
            return new Promise(function(resolve,reject){
                        server.get('coin/generalinfo',{
                            params: {
                               fsyms: store.state.allCoins,
                               tsym: 'USD' 
                            }    
                        }).then((response) => {
                        store.commit('loadCoinsInfo', response.data.Data);    
                        resolve();
                })   
            })  
        }
        
    }
}