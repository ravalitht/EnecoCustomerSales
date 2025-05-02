import {ENV} from "../utilities/envConfig";


export class Applicationurls{

    static ENECO_HOME_DEV_URL : string;
    static ENECO_HOME_TEST_URL : string;
    static ENECO_HOME_STAGE_URL : string;
    

    constructor(){

        Applicationurls.ENECO_HOME_DEV_URL = 'https://www.eneco.nl/';
        Applicationurls.ENECO_HOME_TEST_URL = 'https://www.eneco.nl/';
        Applicationurls.ENECO_HOME_STAGE_URL = 'https://www.eneco.nl/';

    }


    public static getEnecohomeURL(){

       switch(ENV){
            case "dev":
                return this.ENECO_HOME_DEV_URL;
                break;

            case 'test':
                return this.ENECO_HOME_TEST_URL;
                break;

            case 'stage':
                return this.ENECO_HOME_STAGE_URL;
                break;
            
            default:
                throw new Error(`Unknown ENV: ${ENV}`);
        }
    }

}