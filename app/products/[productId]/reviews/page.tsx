export default function Review({params}:{
    params: {productId: String}
}){

    return(
        <>
    <h1>Reviews for the product {params.productId} !</h1>
    <h2> Review 1</h2>
    <h2> Review 2</h2>
    <h2> Review 3</h2>
    </>)
}