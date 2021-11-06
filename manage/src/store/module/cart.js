import {updateStorage} from '../tools'

// 获取本地存储数据
let cartlist = localStorage.getItem('cartlist')
try{
    cartlist = JSON.parse(cartlist) || []
}catch(err){
    cartlist = []
}

export default {
    state:{
        cartlist
    },
    getters:{
        totalPrice(state,getters,rootState,rootGetters) {
            console.log('cart->state,getters,rootState,rootGetters',state,getters,rootState,rootGetters)
            return state.cartlist.reduce((val,item)=>val+item.sales_price*item.qty,0)
        },
    },
    mutations:{
        addToCart(state,payload){
            state.cartlist.unshift(payload)

            // 更新本地存储数据
            updateStorage('cartlist',state.cartlist)
        },
        removeFromCart(state,ids){
            state.cartlist = state.cartlist.filter(item=>{
                return !ids.includes(item._id)
            })
            updateStorage('cartlist',state.cartlist)
        },
        // store.commit('changeQty',{_id,qty})
        changeQty(state,payload){
            console.log('mutaiton.changeQty',payload)
            state.cartlist.forEach(item=>{
                if(item._id === payload._id){
                    item.qty = payload.qty;
                }
            })
            updateStorage('cartlist',state.cartlist)
        },
    },
    actions:{

    }
}