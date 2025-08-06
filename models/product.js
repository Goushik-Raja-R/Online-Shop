const fs = require('fs');
const path = require('path')


module.exports = class product{

    constructor(t){
        this.title = t;
    }

    save(){
        const p = path.join
        (path.dirname(process.mainModule.filename,
            'data',
            'Products.json')
        );
        fs.readFile(p,(error,fileContent)=>{
            let products = [];

            if(!err){
                products = JSON.parse(fileContent);
            }
            products.push(this)
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            })
        });
    }

    static FetchAll(){
        const p = path.join(path.dirname(process.mainModule.filename))
    }
}