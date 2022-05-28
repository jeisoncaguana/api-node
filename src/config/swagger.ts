import { environment } from "./environment";

export const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Usuarios Hortifarm",
            version:"1.0.0",
            decription:"Microservicio usuarios Hortifarm"
        },
        servers:[
            {
                url:`http://localhost:${environment.PORT}`
            }
        ]
    },
    apis:[
        "./src/api/auth/*.ts",
        "./src/api/users/*.ts",
        "./src/api/profiles/*.ts",
        "./src/api/moduls/*.ts",
        "./src/api/objectScreen/*.ts",
        "./src/api/screen/*.ts",
    ]
}