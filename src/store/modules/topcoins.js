import server from '~/server.js'

export default {
    namespaced: true,
    state: {
        allCoinsInfo: []
    },
    
    getters: {
        allCoins(state){
            return state.allCoinsInfo;
        }
    },
    mutations: {
        
        loadCoinsInfo(state, coinsFullInfo){
            let coinsInfo = coinsFullInfo.map((coinInfo) => {
               return {
                       Name: coinInfo.CoinInfo.Name,
                       ImageUrl: coinInfo.CoinInfo.ImageUrl,
                       FullName: coinInfo.CoinInfo.FullName,
                       Price: coinInfo.RAW.USD.PRICE,
                       MktCap: coinInfo.DISPLAY.USD.MKTCAP
               }
            }) 
            state.allCoinsInfo = coinsInfo;
        }
        
    },
    actions: {
        
        loadCoinsInfo(store){
            return new Promise(function(resolve,reject){
                        server.get('top/mktcapfull',{
                            params: {
                               limit: 100,
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