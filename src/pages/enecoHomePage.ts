import { test, expect, Page } from '@playwright/test';
import {postcodes} from '../testData/postcodes'
import { Applicationurls } from '../utilities/applicationURLS';


export class EnecoHomePage{
    
    static landToEnecoHome() {
        throw new Error('Method not implemented.');
    }
    page: any;


    constructor(page:Page){

        this.page=page;
    }

  async landToEnecoHome(appUrl:string){

    console.log("Landing to Eneco Home")
    await this.page.goto(appUrl);
    await expect(this.page.getByRole('heading', { name: 'Mogen wij cookies plaatsen?' })).toBeVisible();
    await expect(this.page.getByLabel('Mogen wij cookies plaatsen?')).toContainText('Accepteren');
    await this.page.getByRole('button', { name: 'Accepteren' }).click();

 }



 async fillRequestEnergyDetails(){

    console.log("fill customers address")
    await this.page.getByRole('textbox', { name: 'Postcode' }).fill(postcodes[0].postcode);
    await this.page.getByRole('textbox', { name: 'Huisnr.' }).fill(postcodes[0].housenumber);
    await expect(this.page.getByText(postcodes[0].fullAddress)).toBeVisible();
    await this.page.getByRole('button', { name: 'Bereken je maandbedrag' }).click();
 }
}