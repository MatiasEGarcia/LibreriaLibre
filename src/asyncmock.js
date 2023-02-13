var books = [
    {
        id: '1',
        name: 'Harry Potter y la piedra filosofal',
        price: 1000,
        category: ['Fantasy', 'Adventure'],
        img: '/img/harryPotterPiedraFilosofal.jpg',
        stock: 3,
        description: 'Primer libro de la saga de Harry Potter'
    },
    {
        id: '2',
        name: 'Los mitos de la historia argentina',
        price: 2000,
        category: ['History'],
        img: '/img/mitosHistoriaArgentina.jpg',
        stock: 5,
        description: 'De los pueblos originarios y la conquista de América a la independencia.'
    },
    {
        id: '3',
        name: 'Veinte mil leguas de viaje submarino',
        price: 2500,
        category: ['Science fiction', 'Adventure'],
        img: '/img/viajeSubmarino.jpg',
        stock: 6,
        description: 'una de las obras literarias más conocidas del escritor francés Julio Verne'
    },
    {
        id: '4',
        name: 'El dia que se perdio el amor',
        price: 3000,
        category: ['Romance', 'Mistery'],
        img: '/img/diaQueSePerdioElAmor.jpg',
        stock: 5,
        description: 'El inspector Bowring,intentará descubrir qué esconde una nota amarillenta con el nombre de una mujer que horas después aparece decapitada en un descampado.'
    },
    {
        id: '5',
        name: 'El nombre de la rosa',
        price: 4000,
        category: ['History', 'Mistery'],
        img: '/img/elNombreDeLaRosa.jpg',
        stock: 7,
        description: 'Ambientada en el turbulento ambiente religioso del siglo XIV, la novela narra la investigación que realizan fray Guillermo de Baskerville y su pupilo Adso de Melk alrededor de una misteriosa serie de crímenes que suceden en una abadía del norte de Italia.'
    }
]
var purchaseId = 0;

//With timeout will simulate a backend response

export const getBooks = (category) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (!category) {
                resolve(books);
            } else {
                resolve(books.filter(book => book.category.find(cate => cate === category)));
            }
        }, 2000);
    });
};

export const getBookById = (id) => {
    return new Promise ((resolve,reject) =>{
        setTimeout(() => {
            resolve(books.find(book => book.id === id));
        },2000);
    });
};

//For now I won't save anything but the purchase id, id I add a database in the future then I will save the buyer data
export const buyBooks = (objCreate) => {
    const outOfStock = [];
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            objCreate.cart.forEach(cartBook =>{
                let dataBook = books.filter(dataBook => dataBook.id === cartBook.id);
                if(dataBook.stock < cartBook.quantity){
                    outOfStock.push(dataBook);
                }else{
                    setBookNewStock(cartBook);
                };    
            });
            if(outOfStock !== 0) return reject({type : 'outOfStock', outOfStock});
            purchaseId++;
            resolve(purchaseId);
        },2000);
    }); 
}

const setBookNewStock = (cartBook) => {
    books = books.map(book => {
        let returnBook = {...book};
        if(returnBook.id === cartBook.id){
            returnBook.stock -= cartBook.quantity;
        }
        return returnBook;
    });
}