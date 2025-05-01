import { test, expect, Page } from '@playwright/test';


export class enecoHomePage{
    page: any;


    constructor(page:Page){

        this.page=page;
    }

public async selectDynamicContract(){

    await expect(this.page.getByRole('heading', { name: 'Kies je type energiecontract' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Dynamisch' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectVastContract(){

    await expect(this.page.getByRole('heading', { name: 'Kies je type energiecontract' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Vast' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async validateyourOfferSectionEG(){

    await expect(this.page.getByRole('heading', { name: 'Je aanbod' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Groene stroom' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Gas' })).toBeVisible();
    await this.page.getByRole('heading', { name: 'Totaal' }).click();
    await this.page.getByRole('button', { name: 'Naar je gegevens' }).click();
  

}
 

public async validateyourOfferSectionEOnly(){

    await expect(this.page.getByRole('heading', { name: 'Je aanbod' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Groene stroom' })).toBeVisible();
    await this.page.getByRole('heading', { name: 'Totaal' }).click();
    await this.page.getByRole('button', { name: 'Naar je gegevens' }).click();
  

}


public async validateyourOfferSectionGOnly(){

    await expect(this.page.getByRole('heading', { name: 'Je aanbod' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Gas' })).toBeVisible();
    await this.page.getByRole('heading', { name: 'Totaal' }).click();
    await this.page.getByRole('button', { name: 'Naar je gegevens' }).click();
  

}



}