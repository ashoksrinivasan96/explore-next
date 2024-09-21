export default function ProductReview({ params } : {
    params: {
        reviewId : String,
        productId: String

    }
} ){

    return(
        <>
        <h1> This is the Review ID {params.reviewId}</h1>
        <p>
            product {params.productId} is a great product!
        </p>
        </>
    )
}