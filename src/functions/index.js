export const sumTotal = (items) => 
    items?.map((item) => item.price * item.quantity)?.reduce((a,b)=> a + b, 0)
