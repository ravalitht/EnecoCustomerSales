import { test, expect, Page } from '@playwright/test';


export class BerekenPage{
    page: any;


    constructor(page:Page){

        this.page=page;
    }


public async selectTyepOfEnergySupplyEG(){

    await expect(this.page.getByRole('heading', { name: 'Welk type energie wil je in' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Stroom & gas' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async selectTyepOfEnergySupplyGOnly(){

    await expect(this.page.getByRole('heading', { name: 'Welk type energie wil je in' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Alleen gas' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectTyepOfEnergySupplyEOnly(){

    await expect(this.page.getByRole('heading', { name: 'Welk type energie wil je in' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Alleen Stroom' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async selectHelpmeEstimateQuestion(){

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

    await this.page.getByRole('radio', { name: 'Ja, ik vul mijn verbruik zelf' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Stroom normaal verbruik per' }).fill('2000');
   
    await this.page.getByRole('textbox', { name: 'Stroom dal verbruik per jaar' }).fill('2000');
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Gasverbruik per jaar in' }).fill('800');
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}



public async selectEnterConsumptionforEOnly(){

    await this.page.getByRole('radio', { name: 'Ja, ik vul mijn verbruik zelf' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Stroom normaal verbruik per' }).fill('2000');
   
    await this.page.getByRole('textbox', { name: 'Stroom dal verbruik per jaar' }).fill('2000');
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}




public async selectEnterConsumptionforGOnly(){

    await this.page.getByRole('radio', { name: 'Ja, ik vul mijn verbruik zelf' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
    await this.page.getByRole('textbox', { name: 'Gasverbruik per jaar in' }).fill('800');
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async doyouhaveSmartmeterQuestionYes(){

    await this.page.getByRole('radio', { name: 'Ja, ik heb een slimme meter' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async doyouhaveSmartmeterQuestionNo(){

    await this.page.getByRole('radio', { name: 'Nee, ik heb geen slimme meter' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async doyouhaveSolarPanelsQuestionYes(){

    await expect(this.page.getByRole('heading', { name: 'Heb je zonnepanelen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Ja, ik wek zelf stroom op' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();
  
    await this.page.getByRole('textbox', { name: 'Teruglevering per jaar in' }).fill('400');
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}


public async doyouhaveSolarPanelsQuestionNo(){

    await expect(this.page.getByRole('heading', { name: 'Heb je zonnepanelen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Nee, ik wek zelf geen stroom op' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}




public async areyouMovingQuestionYes(){

    await expect(this.page.getByRole('heading', { name: 'Ga je verhuizen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Ja, ik ga verhuizen' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}


public async areyouMovingQuestionNo(){

    await expect(this.page.getByRole('heading', { name: 'Ga je verhuizen?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Nee, ik ga niet verhuizen' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();


}

  




}