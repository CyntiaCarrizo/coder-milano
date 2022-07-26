export const product =[
    {
        "id":1,
        "nombre":"Imperial",
        "precio":250,
        "stock":5,
        "descripcion":"Imperial Edicion Especial Amber Larger",
        "imagen":"https://club23.com.ar/wp-content/uploads/2021/08/ImperialRoja.jpg",
        "categoryId":1,
    },
    {
        "id":2,
        "nombre":"Imperial Apa",
        "precio":270,
        "stock":5,
        "descripcion":"Cerveza Imperial APA: APA es una Pale Ale de origen americano hecha con 100% de lúpulo Cascade y maltas especiales como Munich Caramelo y algo de Tostada que le da cuerpo a la cerveza y un equilibrio perfecto.",
        "imagen":"https://www.espaciovino.com.ar/media/default/0001/63/thumb_62695_default_medium.jpeg",
        "categoryId":1,
    },
      
    {
        "id":3,
        "nombre":"Imperial Ipa",
        "precio":230,
        "stock":100,
        "descripcion":"La India Pale Ale (IPA), es un estilo de cerveza proveniente de Inglaterra con gran carácter, que se ve reflejado en su mayor graduación alcohólica y mayor amargor que las cervezas rubias tradicionales. La graduación alcohólica es de 6% Vol. La desarrollada por Imperial contiene doble Lúpulo: Mandarina Bavaria y Cascade.",
        "imagen":"http://inspiravinoteca.com/web/image/product.template/4487/image_1024?unique=4476396",
        "categoryId":1,
    },
    {
        "id":4,
        "nombre":"Patagonia Kune",
        "precio":185,
        "stock":100,
        "descripcion":"La Patagonia Pale Ale presenta una combinación de maltas especiales, que da lugar a una cerveza de color dorado bronce brillante de leve amargor y cuerpo medio. Cerveza muy balanceada y fácil de tomar.",
        "imagen":"https://gobar.vteximg.com.br/arquivos/ids/157555-1000-1000/patagonia-kune-lata-473--2-.jpg?v=637235178939530000",
        "categoryId":1,
    },
    {
        "id":5,
        "nombre":"Cosecha Tardia Rosada",
        "precio":185,
        "stock":100,
        "descripcion":"",
        "imagen":"https://ardiaprod.vteximg.com.br/arquivos/ids/223908-1000-1000/Vino-Blanco-Norton-Cosecha-Tardia-750-Ml-_1.jpg?v=637873493818530000",
        "categoryId":2,
    },
    {
        "id":6,
        "nombre":"Cosecha Tardia Blanco Norton",
        "precio":185,
        "stock":100,
        "descripcion":"",
        "imagen":"https://www.espaciovino.com.ar/media/default/0001/60/thumb_59587_default_medium.jpeg",
        "categoryId":2,
    },
    {
        "id":7,
        "nombre":"Red Bull",
        "precio":185,
        "stock":100,
        "descripcion":"",
        "imagen":"https://www.espaciovino.com.ar/media/default/0001/58/thumb_57441_default_big.jpeg",
        "categoryId":3,
    },

    
    
]

//import product from "./Products"


let is_ok = true;


const customFetch =() => {
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

export default customFetch