import { test, expect, Page } from '@playwright/test';


export class BerekenPage{
    page: any;


    constructor(page:Page){

        this.page=page;
    }


public async selectTyepOfEnergySupplyEG(){

    console.log("Selecting Electricity and Gas fule types")
    await expect(this.page.getByRole('heading', { name: 'Welk type energie wil je in' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Stroom & gas' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async selectTyepOfEnergySupplyGOnly(){

    await expect(this.page.getByRole('heading', { name: 'Welk type energie wil je in' })).toBeVisible();
    console.log("Selecting Gas Only Contract")
    await this.page.getByRole('radio', { name: 'Alleen gas' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectTyepOfEnergySupplyEOnly(){

    await expect(this.page.getByRole('heading', { name: 'Welk type energie wil je in' })).toBeVisible();
    console.log("Selecting Electricity Only Contract")
    await this.page.getByRole('radio', { name: 'Alleen Stroom' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async selectHelpmeEstimateQuestion(){

    console.log("Selecting Help me Estimate Option")
    await this.page.getByRole('radio', { name: 'Nee, help mij inschatten' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
    await this.page.getByRole('radio', { name: '4 personen' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
    await this.page.getByRole('radio', { name: 'Tussenwoning' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
    await expect(this.page.getByRole('heading', { name: 'Wanneer is je woning gebouwd?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Tussen 1945 en' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectEnterConsumptionforEG(){

    console.log("Entering Consumption for E and G")
    await this.page.getByRole('radio', { name: 'Ja, ik vul mijn verbruik zelf' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Stroom normaal verbruik per' }).fill('2000');
   
    await this.page.getByRole('textbox', { name: 'Stroom dal verbruik per jaar' }).fill('2000');
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Gasverbruik per jaar in' }).fill('800');
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}



public async selectEnterConsumptionforEOnly(){

    console.log("Entering Consumption for Electricity")
    await this.page.getByRole('radio', { name: 'Ja, ik vul mijn verbruik zelf' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Stroom normaal verbruik per' }).fill('2000');
   
    await this.page.getByRole('textbox', { name: 'Stroom dal verbruik per jaar' }).fill('2000');
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}




public async selectEnterConsumptionforGOnly(){

    console.log("Selecting Consumption for Gas")
    await this.page.getByRole('radio', { name: 'Ja, ik vul mijn verbruik zelf' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
    await this.page.getByRole('textbox', { name: 'Gasverbruik per jaar in' }).fill('800');
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async doyouhaveSmartmeterQuestionYes(){

    console.log("Selecting Smart meter as Yes")
    await this.page.getByRole('radio', { name: 'Ja, ik heb een slimme meter' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async doyouhaveSmartmeterQuestionNo(){

    console.log("Selecting Smart meter as No")
    await this.page.getByRole('radio', { name: 'Nee, ik heb geen slimme meter' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async doyouhaveSolarPanelsQuestionYes(){

    console.log("Filling Solar panels details")
    await expect(this.page.getByRole('heading', { name: 'Heb je zonnepanelen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Ja, ik wek zelf stroom op' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Teruglevering per jaar in' }).fill('400');
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}


public async doyouhaveSolarPanelsQuestionNo(){

    console.log("Selecting No Solar panels")
    await expect(this.page.getByRole('heading', { name: 'Heb je zonnepanelen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Nee, ik wek zelf geen stroom op' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}


public async areyouMovingQuestionYes(){

    console.log("Selecting Yes for are you moving Question")
    await expect(this.page.getByRole('heading', { name: 'Ga je verhuizen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Ja, ik ga verhuizen' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
}


public async areyouMovingQuestionNo(){

    console.log("Selecting No for are you moving question")
    await expect(this.page.getByRole('heading', { name: 'Ga je verhuizen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Nee, ik ga niet verhuizen' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
}
}