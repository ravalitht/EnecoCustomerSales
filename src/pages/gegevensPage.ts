import { test, expect, Page } from '@playwright/test';


export class enecoHomePage{
    page: any;


    constructor(page:Page){

        this.page=page;
    }



public async selectStartDateOfDelivery(){


    await expect(this.page.getByRole('heading', { name: 'Vanaf wanneer wil je energie' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectIsResidentialAddressYesQuestion(){

    await expect(this.page.getByRole('heading', { name: 'Woon of werk je op dit adres?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Ja' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectIsResidentialAddressNoQuestion(){

    await expect(this.page.getByRole('heading', { name: 'Woon of werk je op dit adres?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Nee' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async fillPersonnelInformation(){

    await expect(this.page.getByRole('heading', { name: 'Wat zijn je persoonlijke' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Mevr.' }).click();
  
    await this.page.getByRole('textbox', { name: 'Voornaam' }).fill('VOORNAAM');
  
    await this.page.getByRole('textbox', { name: 'Voorletters' }).fill('V');
  
    await this.page.getByRole('textbox', { name: 'Achternaam' }).fill('ACHETRNAAM');
    await this.page.getByRole('textbox', { name: 'Dag' }).click();
    await this.page.getByRole('textbox', { name: 'Dag' }).fill('01');
  
    await this.page.getByRole('textbox', { name: 'Maand' }).fill('01');
  
    await this.page.getByRole('textbox', { name: 'Jaar' }).fill('1990');
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}



public async fillContactInformation(){

    await expect(this.page.getByRole('heading', { name: 'Hoe kunnen we je bereiken?' })).toBeVisible();

    await this.page.getByRole('textbox', { name: 'Telefoonnummer' }).fill('0686576444');
  
  
  
    await this.page.getByRole('textbox', { name: 'E-mailadres' }).fill('R@gmail.com');
    await this.page.getByRole('button', { name: 'Controleer je bestelling' }).click();

}



}