import { test, expect, Page } from '@playwright/test';


export class AanbodPage{
    page: any;


    constructor(page:Page){

        this.page=page;
    }

public async selectDynamicContract(){

    console.log("Selecting Dynamic Contract")
    await expect(this.page.getByRole('heading', { name: 'Kies je type energiecontract' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Dynamisch' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async selectVastContract(){

    console.log("Selecting Vast Contract")
    await expect(this.page.getByRole('heading', { name: 'Kies je type energiecontract' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Vast' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async validateyourOfferSectionEG(){

    console.log("Verifying Validate your Offer Page of Electricity and Gas")
    await expect(this.page.getByRole('heading', { name: 'Je aanbod' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Groene stroom' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Gas' })).toBeVisible();
    await this.page.getByRole('heading', { name: 'Totaal' }).click();
    await this.page.getByRole('button', { name: 'Naar je gegevens' }).click();
  

}
 

public async validateyourOfferSectionEOnly(){

    console.log("Verifying Validate your Offer Page of Electricity Contract")
    await expect(this.page.getByRole('heading', { name: 'Je aanbod' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Groene stroom' })).toBeVisible();
    await this.page.getByRole('heading', { name: 'Totaal' }).click();
    await this.page.getByRole('button', { name: 'Naar je gegevens' }).click();
  

}


public async selectCo2QuestionNo(){

    console.log("Selecting CO2 Question as No")
    await expect(this.page.getByRole('heading', { name: 'Help je mee CO2 te verminderen?' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Naar je aanbod' }).click();
  

}


public async validateyourOfferSectionGOnly(){

    console.log("Verifying Validate your offer page of Gas Contract")
    await expect(this.page.getByRole('heading', { name: 'Je aanbod' })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Gas' })).toBeVisible();
    await this.page.getByRole('heading', { name: 'Totaal' }).click();
    await this.page.getByRole('button', { name: 'Naar je gegevens' }).click();
  

}



public async selectVastGasContractthreeJaar(){
    
    console.log("Selecting Vast 3 years Gas Contract")
    await expect(this.page.getByRole('heading', { name: 'Kies je type energiecontract' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Vast 1 jaar gas' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}
}