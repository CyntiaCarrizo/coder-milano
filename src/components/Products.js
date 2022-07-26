const product =[
    {
        "id":1,
        "nombre":"Imperial Edicion Especial Amber Larger",
        "precio":250,
       "stock":10,
        "descripcion":"Su blend de maltas le otorgan un delicado color ámbar rojizo, una persistente espuma, un fino aroma a granos y un exquisito sabor balanceado entre el dulzor y el amargo. Blend de Maltas: Malta Pilsen, malta Caramelo, malta Chocolate. Ideal para acompañar embutidos, fiambres y carnes asadas.",
        "categoryId":1,
        "imagen":"https://club23.com.ar/wp-content/uploads/2021/08/ImperialRoja.jpg"
    },
    {
        "id":2,
        "nombre":"Imperial Apa",
        "precio":270,
        "stock":15,
       " descripcion":"Cerveza Imperial APA: APA es una Pale Ale de origen americano hecha con 100% de lúpulo Cascade y maltas especiales como Munich Caramelo y algo de Tostada que le da cuerpo a la cerveza y un equilibrio perfecto.",
        "categoryId":1,
        "imagen":"https://www.espaciovino.com.ar/media/default/0001/63/thumb_62695_default_medium.jpeg"
    },
      
    {
        "id":3,
        "nombre":"Imperial Ipa",
        "precio":230,
        "stock":100,
       " descripcion":"La India Pale Ale (IPA), es un estilo de cerveza proveniente de Inglaterra con gran carácter, que se ve reflejado en su mayor graduación alcohólica y mayor amargor que las cervezas rubias tradicionales. La graduación alcohólica es de 6% Vol. La desarrollada por Imperial contiene doble Lúpulo: Mandarina Bavaria y Cascade.",
        "categoryId":1,
        "imagen":"http://inspiravinoteca.com/web/image/product.template/4487/image_1024?unique=4476396"
    },
    {
        "id":4,
        "nombre":"Patagonia Kune",
        "precio":185,
        "stock":50,
        "descripcion":"La Patagonia Pale Ale presenta una combinación de maltas especiales, que da lugar a una cerveza de color dorado bronce brillante de leve amargor y cuerpo medio. Cerveza muy balanceada y fácil de tomar.",
        "categoryId":1,
        "imagen":"https://gobar.vteximg.com.br/arquivos/ids/157555-1000-1000/patagonia-kune-lata-473--2-.jpg?v=637235178939530000"
    },
    {
        "id":5,
        "nombre":"Cosecha Tardia Rosada",
        "precio":185,
        "stock":75,
        "descripcion":"Con este rosado dulce, Norton completa la saga de sus Cosecha Tardía. Elaborado con uvas Merlot logra un color rosa leve de tonos rojizos, aromatica frutal profunda y un sabor franco de frutos rojos",
        "categoryId":2,
        "imagen":"https://ardiaprod.vteximg.com.br/arquivos/ids/223908-1000-1000/Vino-Blanco-Norton-Cosecha-Tardia-750-Ml-_1.jpg?v=637873493818530000"
    },
    {
        "id":6,
        "nombre":"Cosecha Tardia Blanco Norton",
        "precio":185,
        "stock":100,
        "descripcion":"Es elaborado a partir de una selección especial de uvas blancas cosechadas sobremaduras, para lograr su característica dulzura. Su sabor suave, junto a las notas a miel que se perciben en el aroma, lo hacen un vino ideal para beberlo solo, o bien para acompañar postres, patés, quesos azules y frutas secas. Desde su lanzamiento en 1985, Norton Cosecha Tardía es un clásico de la góndola.",
        "categoryId":2,
        "imagen":"https://www.espaciovino.com.ar/media/default/0001/60/thumb_59587_default_medium.jpeg"
    },
    {
        "id":7,
        "nombre":"Red Bull",
        "precio":185,
       " stock":156,
        "descripcion":"Es una bebida energizante, creada para estimular el cerebro en personas sometidas a un gran esfuerzo físico y nunca para ser consumido como una bebida inocente o refrescante. Contiene, principalmente agua, azúcar (sacarosa, glucosa), cafeína, taurina, así como diferentes vitaminas (niacina, ácido pantoténico, B6 y B12).",
        "categoryId":5,
        "imagen":"https://www.espaciovino.com.ar/media/default/0001/58/thumb_57441_default_big.jpeg"
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