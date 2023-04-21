
export const createAdaptedBrand = (doc) =>{

    const data = doc.data()

    const productAdapted = {

        id : doc.id,
        label : data.label,
        slug: data.slug,
        order: data.order,
        
    }

    return productAdapted

}