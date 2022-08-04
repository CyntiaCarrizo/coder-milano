const product =[
    {
        amount:0,
        id:1,
        nombre:"Imperial",
        precio:250,
        stock:5,
        descripcion:"Su blend de maltas le otorgan un delicado color ámbar rojizo, una persistente espuma, un fino aroma a granos y un exquisito sabor balanceado entre el dulzor y el amargo. Blend de Maltas: Malta Pilsen, malta Caramelo, malta Chocolate. Ideal para acompañar embutidos, fiambres y carnes asadas.",
       imagen:"https://firebasestorage.googleapis.com/v0/b/ecommerce-milano.appspot.com/o/imperial.jpg?alt=media&token=b3e4f697-2a7d-47ef-8d07-4b79e78fc047",
     
        categoryId:1,
    },
    {
        amount:0,
        id:2,
        nombre:"Imperial Apa",
        precio:270,
        stock:5,
        descripcion:"Cerveza Imperial APA: APA es una Pale Ale de origen americano hecha con 100% de lúpulo Cascade y maltas especiales como Munich Caramelo y algo de Tostada que le da cuerpo a la cerveza y un equilibrio perfecto.",
        imagen:"https://firebasestorage.googleapis.com/v0/b/ecommerce-milano.appspot.com/o/imperialapa.jpg?alt=media&token=108f8ee5-0f6f-477d-adb5-3963e3296475",
        categoryId:1,
    },
      
    {
        amount:0,
        id:3,
        nombre:"Imperial Ipa",
        precio:230,
        stock:100,
        descripcion:"La India Pale Ale (IPA), es un estilo de cerveza proveniente de Inglaterra con gran carácter, que se ve reflejado en su mayor graduación alcohólica y mayor amargor que las cervezas rubias tradicionales. La graduación alcohólica es de 6% Vol. La desarrollada por Imperial contiene doble Lúpulo: Mandarina Bavaria y Cascade.",
        imagen:"https://firebasestorage.googleapis.com/v0/b/ecommerce-milano.appspot.com/o/imperialipa.jpg?alt=media&token=4de0141e-35ac-40b5-8a88-051f572407f8",
        categoryId:1,
    },
    {
        amount:0,
        id:4,
        nombre:"Patagonia Kune",
        precio:185,
        stock:100,
        descripcion:"La Patagonia Pale Ale presenta una combinación de maltas especiales, que da lugar a una cerveza de color dorado bronce brillante de leve amargor y cuerpo medio. Cerveza muy balanceada y fácil de tomar.",
        imagen:"https://gobar.vteximg.com.br/arquivos/ids/157555-1000-1000/patagonia-kune-lata-473--2-.jpg?v=637235178939530000",
        categoryId:1,
    },
    {
        amount:0,
        id:5,
        nombre:"Cosecha Tardia Rosada",
        precio:185,
        stock:100,
        descripcion:"Con este rosado dulce, Norton completa la saga de sus Cosecha Tardía. Elaborado con uvas Merlot logra un color rosa leve de tonos rojizos, aromatica frutal profunda y un sabor franco de frutos rojos",
        imagen:"https://ardiaprod.vteximg.com.br/arquivos/ids/223908-1000-1000/Vino-Blanco-Norton-Cosecha-Tardia-750-Ml-_1.jpg?v=637873493818530000",
        categoryId:2,
    },
    {
        amount:0,
        id:6,
        nombre:"Cosecha Tardia Blanco Norton",
        precio:185,
        stock:100,
        descripcion:"Es elaborado a partir de una selección especial de uvas blancas cosechadas sobremaduras, para lograr su característica dulzura. Su sabor suave, junto a las notas a miel que se perciben en el aroma, lo hacen un vino ideal para beberlo solo, o bien para acompañar postres, patés, quesos azules y frutas secas. Desde su lanzamiento en 1985, Norton Cosecha Tardía es un clásico de la góndola.",
        imagen:"https://www.espaciovino.com.ar/media/default/0001/60/thumb_59587_default_medium.jpeg",
        categoryId:2,
    },
    {
        amount:0,
        id:7,
        nombre:"Red Bull",
        precio:185,
        stock:100,
        descripcion:"Es una bebida energizante, creada para estimular el cerebro en personas sometidas a un gran esfuerzo físico y nunca para ser consumido como una bebida inocente o refrescante. Contiene, principalmente agua, azúcar (sacarosa, glucosa), cafeína, taurina, así como diferentes vitaminas (niacina, ácido pantoténico, B6 y B12).",
        imagen:"https://www.espaciovino.com.ar/media/default/0001/58/thumb_57441_default_big.jpeg",
        categoryId:3,
    },
    {
    amount: 0,
    id:8,
    nombre:"Red Bull Suggarfree",
    precio:220,
    stock:126,
    descripcion:"Red Bull Sugarfree es Red Bull sin azúcar. Los azúcares, sacarosa y glucosa fueron reemplazados por los edulcorantes Aspartame y Acesulfame K. Red Bull fue la primer marca de bebidas energizantes a nivel global de abordar la necesidad del consumidor de una variedad de producto sin azúcar y dietético.",
    categoryId:5,
    imagen:"https://firebasestorage.googleapis.com/v0/b/ecommerce-milano.appspot.com/o/3.jpg?alt=media&token=fd3ccbb3-65ca-4ca5-8030-ba1f88d03dea"
    },
    {
        amount: 0,
        id:9,
        nombre:"Speed Unlimited Energy Drink",
        precio:185,
        stock:156,
        descripcion:"Speed Unlimited Energy Drink es una bebida sin alcohol, que contiene Cafeína, Taurina y Vitaminas. Ayuda a estimular el metabolismo de la energía, facilita la eliminación de toxinas. Contribuye a mejorar el estado de ánimo, la concentración y la recuperación.",
        categoryId:5,
        imagen:"https://firebasestorage.googleapis.com/v0/b/ecommerce-milano.appspot.com/o/4.jpg?alt=media&token=fa372c4f-35b7-476c-942d-a5a582857a73"
    },
    {
        amount: 0,
        id:10,
        nombre:"Monster Energizante",
        precio:150,
        stock:200,
        descripcion:"Bebida energética carbonatada. Monster es una bebida sin alcohol y con algunas virtudes estimulantes, esta compuesta principalmente por cafeína, varias vitaminas, entre otras sustancias naturales organicas, que eliminan la sensación de agotamiento de las personas que la consumen.",
        categoryId:5,
        imagen:"https://firebasestorage.googleapis.com/v0/b/ecommerce-milano.appspot.com/o/5.jpg?alt=media&token=85c4b0cc-ddeb-4d3e-9105-639939307ff9"
    },
    
    
]

let is_ok = true;


export const promesa = () => {
 
    return new Promise((resolve, reject) => {
        if (is_ok) {
            setTimeout(() => {
                resolve(product)
            }, 2000);
        } else {
            reject("Error")
        }
    });
}


export default product