const products =[
{
    id: '1', 
    name: 'Remera Camiseta Formula Uno', 
    price: 600, 
    category: 'Camiseta',
    brand:'DL', 
    img:'DL_CamisetaFormulaUno.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '2', 
    name: 'Remera Camiseta Stranger Things', 
    price: 534, 
    category: 'Camiseta', 
    brand:'DL', 
    img:'DL_CamisetaStrangerThings.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '3', 
    name: 'Remera Camiseta God Of War', 
    price: 486, 
    category: 'Camiseta', 
    brand:'DL', 
    img:'DL_CamisetaGodOfWar.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '4', 
    name: 'Remera Camiseta Audi Mod 3', 
    price: 506, 
    category: 'Camiseta', 
    brand:'DL', 
    img:'DL_RemeraCamisetaAudiMod3.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '5', 
    name: 'Remera Camiseta Red Hot Chili Peppers', 
    price: 534, 
    category: 'Camiseta', 
    brand:'DL', 
    img:'DL_CamisetaRedHotChiliPeppers.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '6', 
    name: 'Remera Camiseta Nirvana', 
    price: 600, 
    category: 'Camiseta', 
    brand:'DL', 
    img:'DL_RemeraCamisetaNirvana.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '7', 
    name: 'Camiseta Puma Entrenamiento Selección Uruguay', 
    price: 2590, 
    category: 'Camiseta', 
    brand:'Puma', 
    img:'Puma_CamisetaEntrenamientoSelecciónUruguay.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '8', 
    name: 'Remera Camiseta Puma Deportiva', 
    price: 1290, 
    category: 'Camiseta', 
    brand:'Puma', 
    img:'Puma_CamisetaDeportivaCasual.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '9', 
    name: 'Camiseta Oficial Adulto Club Atlético Peñarol', 
    price: 3890, 
    category: 'Camiseta', 
    brand:'Puma', 
    img:'Puma_OficialClubAtléticoPeñarol.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '10', 
    name: 'Camiseta Remera Puma Algodon', 
    price: 1490, 
    category: 'Camiseta', 
    brand:'Puma', 
    img:'Puma_AlgodonGrisAdulto.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '11', 
    name: 'Camiseta Remera Deportiva', 
    price: 2690, 
    category: 'Camiseta', 
    brand:'Adidas', 
    img:'Adidas_CamisetaRemeraDeportiva.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '12', 
    name: 'Camisetas del Real Madrid', 
    price: 2590, 
    category: 'Camiseta', 
    brand:'Adidas', 
    img:'Adidas_CamisetasRealMadrid.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '13', 
    name: 'Camisetas del Juventus', 
    price: 5690, 
    category: 'Camiseta', 
    brand:'Adidas', 
    img:'Adidas_CamiseJuventus.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '14', 
    name: 'Camisetas Fifa World', 
    price: 1740, 
    category: 'Camiseta', 
    brand:'Adidas', 
    img:'Adidas_CamiseFifa.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '15', 
    name: 'Camisetas Paris Saint Germain', 
    price: 3990, 
    category: 'Camiseta', 
    brand:'Nike', 
    img:'Nike_CamisetasParisSaintGermain.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '16', 
    name: 'Camisetas Barcelona', 
    price: 3500, 
    category: 'Camiseta', 
    brand:'Nike', 
    img:'Nike_CamisetaBarcelona.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '17', 
    name: 'Camisetas Liverpool', 
    price: 5500, 
    category: 'Camiseta', 
    brand:'Nike', 
    img:'Nike_CamisetaLiverpool.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
{
    id: '18', 
    name: 'Camisetas Galatasaray ', 
    price: 2900, 
    category: 'Camiseta', 
    brand:'Nike', 
    img:'Nike_CamisetaGalatasaray.webp', 
    stock: 25, 
    description:'Unisex: talle S al talle XXL'
},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}