import joi, { string } from "joi";

export const ValidateReviewData=(reviewObj)=>{
    const Schema =joi.object({
        food: joi.string(),
        restaurant: joi.string(),
        Users: joi.string(),
        rating:joi.number().required(),
        reviewText: joi.string().required(),
        isRestaurantReview:joi.boolean(),
        isFoodReview:joi.boolean(),
        photos:joi.array().items(string()),
    });
    
    return Schema.validateAsync(reviewObj);
};