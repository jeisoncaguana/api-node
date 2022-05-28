import { environment } from "./environment";

export const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Api Node",
            version:"1.0.0",
            decription:"Backend con NODE+TypeScript"
        },
        servers:[
            {
                url:`http://localhost:${environment.PORT}`
            }
        ]
    },
    apis:[
        "./src/api/users/*.ts",
    ]
}