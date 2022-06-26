export const getAllLocalStorageData = () => {
    const allData = localStorage.getItem("shoping-item")
    if (allData) {
        return JSON.parse(allData)
    }
    else {
        return []
    }
}

export const itemLength = ()=>{
    const itemLength = localStorage.getItem("cart-item")
    if (itemLength > 0) {
        return JSON.parse(itemLength)
    }
    else {
        return null
    }
}