import { test, expect, Page } from '@playwright/test';


export class enecoHomePage{
    page: any;


    constructor(page:Page){

        this.page=page;
    }

  async landToEnecoHome(){

    await this.page.goto('https://www.eneco.nl/');
    await expect(this.page.getByRole('heading', { name: 'Mogen wij cookies plaatsen?' })).toBeVisible();
    await expect(this.page.getByLabel('Mogen wij cookies plaatsen?')).toContainText('Accepteren');



 }

 async fillRequestEnergyDetails(){




   
    await this.page.getByRole('textbox', { name: 'Postcode' }).fill('9713RD');
  
    await this.page.getByRole('textbox', { name: 'Huisnr.' }).fill('63');
    await expect(this.page.getByText('Irislaan 63, 9713RD GRONINGEN')).toBeVisible();
    await this.page.getByRole('button', { name: 'Bereken je maandbedrag' }).click();


 }








}