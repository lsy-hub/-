export function updateStorage(key,data){
    // 更新本地存储数据
    if(typeof data === 'object'){
        data = JSON.stringify(data)
    }
    localStorage.setItem(key,data)
}