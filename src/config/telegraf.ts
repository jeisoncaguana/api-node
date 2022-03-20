import { Telegraf } from 'telegraf'
import { environment } from './environment'

export class BOOTTelegraf {

    public boot:Telegraf;

    constructor(){
        this.boot = new Telegraf( environment.TELEGRAM_KEY )
        this.init();         
    }

    init(){
        this.boot.start( (req) =>  req.reply("Bienvenido") )
        // clearlog.
        this.boot.command('clearlog', (req) => {
            req.reply("clearlog!!")
        })

        this.boot.on( 'text', (req) =>  req.reply("Ingresa un comando...") )
        // launch 
        this.boot.launch()
    }
 
}