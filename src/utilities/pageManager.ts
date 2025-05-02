import { test, expect,Page } from '@playwright/test';
import {AanbodPage} from '../pages/aanbodPage';
import {BerekenPage} from '../pages/berekenPage';
//import {controlepage} from '../pages/controlePage';
import { EnecoHomePage } from '../pages/enecoHomePage';
import {GegevensPage} from '../pages/gegevensPage'
import { Applicationurls } from './applicationURLS';



export class PageManager{


    private readonly page:Page;
    private readonly aanbodpageobj:AanbodPage;
    private readonly berekenpageobj:BerekenPage;
    private readonly enecohomepageobj:EnecoHomePage;
    private readonly gegevenspageobj:GegevensPage;
    private readonly appurlObj:Applicationurls;

    constructor(page:Page){

        this.page=page;
        this.aanbodpageobj=new AanbodPage(this.page);
        this.berekenpageobj=new BerekenPage(this.page);
        this.enecohomepageobj=new EnecoHomePage(this.page);
        this.gegevenspageobj=new GegevensPage(this.page);
        this.appurlObj=new Applicationurls();

    }



    public getaanbodpageObj(){
        return this.aanbodpageobj;
    }


    public getberekenpageObj(){
        return this.berekenpageobj;
    }


    public getenecohomepageobj(){
        return this.enecohomepageobj;
    }


    public getgevenspageobj(){
        return this.gegevenspageobj;
    }

    public getappURLObj(){
        return this.appurlObj;
    }
}