import { environment } from "./environment";

export const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Title",
            version:"1.0.0",
            decription:"Microservicio App Name"
        },
        servers:[
            {
                url:`http://localhost:${environment.PORT}`
            }
        ]
    },
    apis:[
        "./src/*.ts", 
    ]
}