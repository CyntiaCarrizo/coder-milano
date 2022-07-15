const product =[
    {
        "id":1,
        "nombre":"Imperial",
        "precio":250,
        "stock":5,
        "descripcion":"Imperial Edicion Especial Amber Larger",
        "imagen":"https://club23.com.ar/wp-content/uploads/2021/08/ImperialRoja.jpg"
    },
    {
        "id":2,
        "nombre":"Imperial Apa",
        "precio":270,
        "stock":5,
        "descripcion":"Cerveza Imperial APA: APA es una Pale Ale de origen americano hecha con 100% de lúpulo Cascade y maltas especiales como Munich Caramelo y algo de Tostada que le da cuerpo a la cerveza y un equilibrio perfecto.",
        "imagen":"https://distriuruguayexpress.com.ar/wp-content/uploads/2021/11/apa.jpg"
    },
      {
        "id":3,
        "nombre":"Imperial Golden",
        "precio":245,
        "stock":5,
        "descripcion":"Edición limitada. una cerveza con sabor equilibrado, ligera y fácil de tomar.Una lager ideal para esos momentos en los que querés disfrutar de un sabor más suave sin resignar calidad y sabor",
        "imagen":"https://ardiaprod.vteximg.com.br/arquivos/ids/215211-1000-1000/Cerveza-Imperial-Golden-lata-473-Ml-_1.jpg?v=637713698773570000"
    },
    {
        "id":4,
        "nombre":"Imperial Ipa",
        "precio":230,
        "stock":100,
        "descripcion":"La India Pale Ale (IPA), es un estilo de cerveza proveniente de Inglaterra con gran carácter, que se ve reflejado en su mayor graduación alcohólica y mayor amargor que las cervezas rubias tradicionales. La graduación alcohólica es de 6% Vol. La desarrollada por Imperial contiene doble Lúpulo: Mandarina Bavaria y Cascade.",
        "imagen":"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/144/141/products/whatsapp-image-2021-06-30-at-19-46-12-11-e4a348028a28a353b016250950257320-640-0.jpeg"
    },
    {
        "id":5,
        "nombre":"Patagonia Kune",
        "precio":185,
        "stock":100,
        "descripcion":"La Patagonia Pale Ale presenta una combinación de maltas especiales, que da lugar a una cerveza de color dorado bronce brillante de leve amargor y cuerpo medio. Cerveza muy balanceada y fácil de tomar.",
        "imagen":"https://gobar.vteximg.com.br/arquivos/ids/157555-1000-1000/patagonia-kune-lata-473--2-.jpg?v=637235178939530000"
    },
    {
        "id":6,
        "nombre":"Cosecha Tardia Rosada",
        "precio":185,
        "stock":100,
        "descripcion":"",
        "imagen":"https://rinconelegido.com.ar/wp-content/uploads/2017/08/Art455_NortonCosechaTardiaRosado_750cc.jpg"
    },
    {
        "id":7,
        "nombre":"Cosecha Tardia Blanco Norton",
        "precio":185,
        "stock":100,
        "descripcion":"",
        "imagen":"https://www.espaciovino.com.ar/media/default/0001/60/thumb_59587_default_medium.jpeg"
    },
    {
        "id":8,
        "nombre":"Red Bull",
        "precio":185,
        "stock":100,
        "descripcion":"",
        "imagen":"https://cdnx.jumpseller.com/dc-central-distribuidora-de-licores/image/16063932/resize/540/540?1646775862"
    },

    
    
]

let is_ok = true;


export const customFetch = () => {
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