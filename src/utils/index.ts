export class HFUtils {

    /**
     * Get year
     *
     * @param date
     * @returns String
     */
    public static getYear( date:string, format: 'YY' | 'YYYY' ):string {
        const newDate:any   = new Date( date ) 
        const parseDate:any = new Date ( Date.parse( newDate ) )
        const formatDate = parseDate.getUTCFullYear()
        
        if( format === 'YY')
            return String(formatDate).substr(2,2)
        else
            return formatDate
    }

     /**
     * Get week number
     *
     * @param week
     * @returns Date
     */
    public static getDateToWeek( anio:number, week:number ) {
        const date = new Date( anio , 0, 1+((week-1)*7))
        return date
    }

    /**
     * Get week number
     *
     * @param date
     * @returns String
     */
    public static getDateYYYYMMDD( param:string ) {
        var date   = new Date( param ) 
        var newDate = date.toLocaleDateString()
        var split = newDate.split("/")
        var dd = Number(split[0])
        var mm = Number(split[1]) 
        var yy = Number(split[2])

        return `${yy}/${mm}/${dd}`
    }

    /**
     * 
     * @param array 
     * @returns 
     */
    public static parsePayload( array:any ){
        let str = array.join()
        let arr = str.split(',') 
        let newArray = ''
        arr.forEach((el:any)=> newArray = newArray+`'${el}',` )
        //dividir la cadena de texto por una coma
        return newArray.slice(0, -1)                
    }


    /**
     * 
     * @returns weeks
     */
    public static weeks(){
            return [
            { "week": 1 , "Semana":"1" }, 
            { "week": 2 , "Semana":"2" }, 
            { "week": 3 , "Semana":"3" }, 
            { "week": 4 , "Semana":"4" }, 
            { "week": 5 , "Semana":"5" }, 
            { "week": 6 , "Semana":"6" }, 
            { "week": 7 , "Semana":"7" }, 
            { "week": 8 , "Semana":"8" }, 
            { "week": 9 , "Semana":"9" }, 
            { "week": 10 , "Semana":"10" },
            { "week": 11 , "Semana":"11" }, 
            { "week": 12 , "Semana":"12" }, 
            { "week": 13 , "Semana":"13" }, 
            { "week": 14 , "Semana":"14" }, 
            { "week": 15 , "Semana":"15" }, 
            { "week": 16 , "Semana":"16" }, 
            { "week": 17 , "Semana":"17" }, 
            { "week": 18 , "Semana":"18" }, 
            { "week": 19 , "Semana":"19" }, 
            { "week": 20 , "Semana":"20" },
            { "week": 21 , "Semana":"21" }, 
            { "week": 22 , "Semana":"22" }, 
            { "week": 23 , "Semana":"23" }, 
            { "week": 24 , "Semana":"24" }, 
            { "week": 25 , "Semana":"25"}, 
            { "week": 26 , "Semana":"26"}, 
            { "week": 27 , "Semana":"27" }, 
            { "week": 28 , "Semana":"28" }, 
            { "week": 29 , "Semana":"29" }, 
            { "week": 30 , "Semana":"30" },
            { "week": 31 , "Semana":"31" }, 
            { "week": 32 , "Semana":"32" }, 
            { "week": 33 , "Semana":"33" }, 
            { "week": 34 , "Semana":"34" }, 
            { "week": 35 , "Semana":"35" }, 
            { "week": 36 , "Semana":"36" }, 
            { "week": 37 , "Semana":"37" }, 
            { "week": 38 , "Semana":"38" }, 
            { "week": 39 , "Semana":"39" }, 
            { "week": 40 , "Semana":"40" },
            { "week": 41 , "Semana":"41" },
            { "week": 42 , "Semana":"42" },
            { "week": 43 , "Semana":"43" },
            { "week": 44 , "Semana":"44" },
            { "week": 45 , "Semana":"45" },
            { "week": 46 , "Semana":"46" }
        ]
    }

    /**
     * 
     * @param payload 
     * @returns 
     */
    public static validarDescripcion( payload: any ) { 
        var bool = false
        Object.keys( payload ).forEach( property => {
                        const value = payload[property]
                        if(value !== undefined  && value !== null && value.length && value[0] !== "")
                        return bool = true
        })
        return bool
    }

    /**
     * 
     * @param array 
     * @returns getModules
     */
    public static getModules ( array: any ){
        let hash:any = {}      
        let stringModules:string = '['
        array.forEach( ( data:any ) => {

            let ketItem = data.modulo || ''
           
 
            if( data.NIVEL === 1 && data.ruta) {

                const path =  ( !data.ruta ) ? '' : `"path": "${data.ruta }", `
                const  modulo       = data.modulo ?  `"${data.modulo}"` : false
                const  icono_modulo = data.icono_modulo ?  `"${data.icono_modulo}"` : false
                stringModules += `{
                        ${path}
                        "text": ${modulo},
                        "icon": ${icono_modulo}
                    },`
            }else {
           
                const  modulo       = data.modulo ?  `"${data.modulo}"` : false
                const  icono_modulo = data.icono_modulo ?  `"${data.icono_modulo}"` : false
                const arraySubModules = array.filter( (item:any) => item.MODULO === ketItem && item.NIVEL === 2)

                let stringSubModules = '['
                arraySubModules.forEach( ( data:any ) => {
                        const  SUB_MODULO   = data.SUB_MODULO ?  `"${data.SUB_MODULO}"` : false
                            stringSubModules += `{                         
                                    "path": "${data.ruta }",
                                    "text": ${SUB_MODULO}  
                                },` 
                     
                })

                let modules =`${stringSubModules.substring(0, stringSubModules.length - 1)}]` 
                

                stringModules += `{
                        "items": ${modules === ']' ? "[]" : modules},
                        "text": ${modulo},
                        "icon": ${icono_modulo ? icono_modulo :'"preferences"'}
                    },`
            }
              
           
        }) 
        const parseJSON = JSON.parse(`${stringModules.substring(0, stringModules.length - 1)}]`)
        let modules = parseJSON.filter( (o:any) => hash[o.text] ? false : hash[o.text] = true)
   
        return modules  
    }
    
    /**
     * 
     * @param array 
     * @returns getObjectScreens
     */
    public static getObjectScreens( array:any ){

        let hash:any = {}      
        let stringModules:string = '['
        array.forEach( ( data:any ) => {
           
            if( data.ruta) {
                stringModules += `{
                        "path": "${data.ruta }",
                        "text": "${data.pantalla }",
                        "add": ${data.nuevo },
                        "update": ${data.editar },
                        "delete": ${data.eliminar }
                    },`
            }  
        }) 

         const parseJSON = JSON.parse(`${stringModules.substring(0, stringModules.length - 1)}]`)
        let modules = parseJSON.filter( (o:any) => hash[o.text] ? false : hash[o.text] = true)
   
        return modules   
    }
} 