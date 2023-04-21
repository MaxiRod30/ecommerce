
export const createAdaptedFirestore = (doc) =>{

    const data = doc.data()

    const productAdapted = {

        id : doc.id,
        name : data.name,
        img: data.img,
        brand: data.brand,
        category: data.category,
        price: data.price,
        stock: data.stock,
        description: data.description
        
    }

    return productAdapted

}