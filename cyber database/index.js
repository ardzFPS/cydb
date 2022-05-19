/**
 * Verwenden Sie cydb auf DEUTSCH.
 */


    class cydbTR {
     
        
        /*    CYDB TÜRKÇE VERSİYONU                                                                                                 */
            yaz(veri, değer){
                
                if(!veri) throw new TypeError(chalk.red("Veri Girmediniz "))
                if(!değer) throw new TypeError(chalk.red("Değer Girmediniz "))
                const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
                dosya[veri] = değer 
                return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
            }//yazı
            bul(veri){
                if(!veri) throw new TypeError(chalk.red("Veri Girmediniz "))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            if(!dosya[veri]) throw new TypeError(chalk.yellow("CYDB (Cyber Database) Yazdığınız Veriyi Bulamadı \n" + __dirname))
            return dosya[veri]
            }//okuma
        
            kontrol(veri){
                if(!veri) throw new TypeError(chalk.red("Veri Girmediniz "))
                const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
                return dosya [veri] ? true : false 
            }//kontrol
            sil(veri){
                if(!veri) throw new TypeError(chalk.red("Veri Girmediniz "))
                const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
                if(!dosya[veri]) throw new TypeError(chalk.yellow("CYDB (Cyber Database) Yazdığınız Veriyi Bulamadı \n" + __dirname))
                delete dosya[veri]
                return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
            }//sil 
            yedekle(dosyaadı){
                if(!dosyaadı) throw TypeError(chalk.red("Dosya Adı  Girmediniz "))
                const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
                return fs.writeFileSync(`${dosyaadı}.json`, JSON.stringify(dosya , null , 2 ))
            }//yedekleme
        
            topla(veri, değer){
                if(!veri) throw new TypeError(chalk.red("Veri Girmediniz "))
                if(typeof değer !== "number") throw new TypeError(chalk.blue("Değer Olarak Sayı Giriniz, Girmediniz "))
                if(!this.kontrol(veri)) throw new TypeError(chalk.red("Veri Olarak Girdiğiniz Değer Bulunamadı  "))
                if(typeof this.bul(veri) !== "number") throw new TypeError(chalk.bold("Sayı Ekleyeceğiniz Değer Sayı Olmalı "))
                const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
                dosya[veri] += değer
                return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
            }//toplama
        
            çıkar(veri,değer){
                if(!veri) throw new TypeError(chalk.red("Veri Girmediniz "))
                if(typeof değer !== "number") throw new TypeError(chalk.blue("Değer Olarak Sayı Giriniz, Girmediniz "))
                if(!this.kontrol(veri)) throw new TypeError(chalk.red("Veri Olarak Girdiğiniz Değer Bulunamadı  "))
                if(typeof this.bul(veri) !== "number") throw new TypeError(chalk.bold("Sayı Ekleyeceğiniz Değer Sayı Olmalı "))
                const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
                dosya[veri] -= değer
                return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
            }//çıkarma
            sıfırla(){
                const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
                return fs.writeFileSync("CYdatabase.json", JSON.stringify({}, null , 2 ))
              
            }//veri sıfırlama
        
           depola(veri, değer) {
                if (!veri) throw new TypeError("Bir veri belirtilmedi!");
                if (!değer) throw new TypeError("Bir değer belirtilmedi!");
                let dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"));
                if (dosya[veri] && veri.isveri(dosya[veri])) {
                  dosya[veri].push(değer)
                  fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 1))
                } else if (!dosya[veri]) {
                  this.yaz(veri, [değer])
                }
                return
              
            }
    }
    /**
     * Utilisez cydb en FRANÇAIS.
     */

    /**
     * Use cydb in ENGLISH.
     */
    class cydbEN {
        set(veri, değer){
        
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data"))
            if(!değer) throw new TypeError(chalk.red("You Didn't Enter a Value"))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            dosya[veri] = değer 
            return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
        }//yazı
        get(veri){
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data "))
        const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
        if(!dosya[veri]) throw new TypeError(chalk.yellow(" CYDB (Cyber ​​Database)Couldn't Find The Data You Typed \n" + __dirname))
        return dosya[veri]
        }//okuma
        
        fetch(veri){
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data "))
        const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
        if(!dosya[veri]) throw new TypeError(chalk.yellow(" CYDB (Cyber ​​Database)Couldn't Find The Data You Typed \n" + __dirname))
        return dosya[veri]
        }//okuma
        
        check(veri){
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data"))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            return dosya [veri] ? true : false 
        }//kontrol
        has(veri){
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data"))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            return dosya [veri] ? true : false 
        }//kontrol
        delete(veri){
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data"))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            if(!dosya[veri]) throw new TypeError(chalk.yellow("Cyber Database Yazdığınız Veriyi Bulamadı \n" + __dirname))
            delete dosya[veri]
            return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
        }//sil 
        backup(dosyaadı){
            if(!dosyaadı) throw TypeError(chalk.red("You Didn't Enter a File Name"))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            return fs.writeFileSync(`${dosyaadı}.json`, JSON.stringify(dosya , null , 2 ))
        }//yedekleme
        
        add(veri, değer){
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data"))
            if(typeof değer !== "number") throw new TypeError(chalk.blue("Enter Number as Value You Didn't Enter "))
            if(!this.kontrol(veri)) throw new TypeError(chalk.red("The Value You Entered As Data Could Not Be Found  "))
            if(typeof this.bul(veri) !== "number") throw new TypeError(chalk.bold("Sayı Ekleyeceğiniz Değer Sayı Olmalı "))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            dosya[veri] += değer
            return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
        }//toplama
        
        substr(veri,değer){
            if(!veri) throw new TypeError(chalk.red("You Didn't Enter Data "))
            if(typeof değer !== "number") throw new TypeError(chalk.blue("Enter Number as Value You Didn't Enter"))
            if(!this.kontrol(veri)) throw new TypeError(chalk.red("The Value You Entered As Data Could Not Be Found "))
            if(typeof this.bul(veri) !== "number") throw new TypeError(chalk.bold("Sayı Ekleyeceğiniz Değer Sayı Olmalı "))
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            dosya[veri] -= değer
            return fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 2))
        }//çıkarma
        reset(){
            const dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"))
            return fs.writeFileSync("CYdatabase.json", JSON.stringify({}, null , 2 ))
          
        }//veri sıfırlama
        
        
        
        store(veri, değer) {
          if (!veri) throw new TypeError("You Didn't Enter Data ");
          if (!değer) throw new TypeError("No value specified.");
          let dosya = JSON.parse(fs.readFileSync("CYdatabase.json", "utf8"));
          if (dosya[veri] && veri.isveri(dosya[veri])) {
            dosya[veri].push(değer)
            fs.writeFileSync("CYdatabase.json", JSON.stringify(dosya, null, 1))
          } else if (!dosya[veri]) {
            this.yaz(veri, [değer])
          }
          return
        }
        
        TEST(params, {otherParams = "other"}) {
            console.log(params, otherParams);
        }
    }
    
    
    //MODULE.EXPORTS KISMINI DEĞİŞCEZ BU ARADA
    module.exports = {
        türkçe: cydbTR,
        
        english: cydbEN,
        
    }
    
    //TEST.JS
