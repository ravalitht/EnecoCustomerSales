import { test, expect, Page } from '@playwright/test';


export class GegevensPage{
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


public async verifyCustomerProvidedDetailsOnControlPage(){

    await this.page.getByRole('textbox', { name: 'Rekeningnummer (IBAN)' }).fill('NL63 INGB 5198 4917 56');
    await expect(this.page.locator('form')).toContainText('BedenktijdJe hebt recht op 14 dagen bedenktijd.');
    await expect(this.page.locator('form')).toContainText('Wanneer je klikt op onderstaande button, ga je akkoord met de voorwaarden en tarieven en ga je een betalingsverplichting met Eneco aan. Tevens machtig je Eneco, totdat je deze weer intrekt, tot automatische incasso, vanaf de door jou opgegeven rekening, van de verschuldigde maand- en jaarbedragen voor energie en daarbij behorende producten en diensten.');
  
    await expect(this.page.locator('form')).toContainText('Bezwaar makenJe hebt het recht om bezwaar te maken tegen verwerkingen van je persoonsgegevens, waarvoor we een gerechtvaardigd belang hebben. Meer informatie over hoe dit recht van bezwaar werkt en hoe we met je persoonsgegevens omgaan vind je in ons privacystatement.');
    await expect(this.page.locator('form')).toContainText('Slimme meter allocatieBij dit contract hoort dat we je verbruik en de actuele tarieven aan je kunnen laten zien. En dat we je hierover advies en inzicht kunnen geven. We vragen daarom de kwartierwaarden stroom en/of de dagwaarden gas van je slimme meter(s) op bij je netbeheerder. Dit is dus noodzakelijk voor de uitvoering van de overeenkomst. Je netbeheerder gebruikt de uurstanden uit je slimme stroommeter volgens individuele Slimme Meter Allocatie. Op deze manier kan je netbeheerder precies je verbruik berekenen en controleren of wij de inkoop van stroom hebben afgestemd op het gebruik voor je aansluiting.');
  }
}