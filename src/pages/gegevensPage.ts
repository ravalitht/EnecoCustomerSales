import { test, expect, Page } from '@playwright/test';
import {customerData} from '../testData/customerData'

export class GegevensPage{
    page: any;

    constructor(page:Page){

        this.page=page;
    }



public async selectStartDateOfDelivery(){

    console.log("Keeping start date as is")
    await expect(this.page.getByRole('heading', { name: 'Vanaf wanneer wil je energie' })).toBeVisible();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectIsResidentialAddressYesQuestion(){

    console.log("Selecting Residential function as Yes")
    await expect(this.page.getByRole('heading', { name: 'Woon of werk je op dit adres?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Ja' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async selectIsResidentialAddressNoQuestion(){

    console.log("Selecting Residential Function as No")
    await expect(this.page.getByRole('heading', { name: 'Woon of werk je op dit adres?' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Nee' }).click();
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}



public async fillPersonnelInformation(){

    console.log("filling customers Personnel Information")
    await expect(this.page.getByRole('heading', { name: 'Wat zijn je persoonlijke' })).toBeVisible();
    await this.page.getByRole('radio', { name: 'Mevr.' }).click();
  
    await this.page.getByRole('textbox', { name: 'Voornaam' }).fill(customerData[0].voornaam);
    await this.page.getByRole('textbox', { name: 'Voorletters' }).fill(customerData[0].voorletters);
    await this.page.getByRole('textbox', { name: 'Achternaam' }).fill(customerData[0].Achternaam);

    await this.page.getByRole('textbox', { name: 'Dag' }).fill(customerData[0].DOB[0]);
    await this.page.getByRole('textbox', { name: 'Maand' }).fill(customerData[0].DOB[1]);
    await this.page.getByRole('textbox', { name: 'Jaar' }).fill(customerData[0].DOB[2]);
    await this.page.getByRole('button', { name: 'Volgende' }).click();

}


public async fillContactInformation(){

    console.log("filling contact information")
    await expect(this.page.getByRole('heading', { name: 'Hoe kunnen we je bereiken?' })).toBeVisible();

    await this.page.getByRole('textbox', { name: 'Telefoonnummer' }).fill(customerData[0].Telephonenummer);
    await this.page.getByRole('textbox', { name: 'E-mailadres' }).fill(customerData[0].E_mailadres);

    await this.page.getByRole('button', { name: 'Controleer je bestelling' }).click();

}


public async verifyCustomerProvidedDetailsOnControlPageDynamicContract(){

    console.log("Verifying customer provided details on control page")
    await this.page.getByRole('textbox', { name: 'Rekeningnummer (IBAN)' }).fill(customerData[0].IBAN);
    await expect(this.page.locator('form')).toContainText('BedenktijdJe hebt recht op 14 dagen bedenktijd.');
    await expect(this.page.locator('form')).toContainText('Wanneer je klikt op onderstaande button, ga je akkoord met de voorwaarden en tarieven en ga je een betalingsverplichting met Eneco aan. Tevens machtig je Eneco, totdat je deze weer intrekt, tot automatische incasso, vanaf de door jou opgegeven rekening, van de verschuldigde maand- en jaarbedragen voor energie en daarbij behorende producten en diensten.');
  
    await expect(this.page.locator('form')).toContainText('Bezwaar makenJe hebt het recht om bezwaar te maken tegen verwerkingen van je persoonsgegevens, waarvoor we een gerechtvaardigd belang hebben. Meer informatie over hoe dit recht van bezwaar werkt en hoe we met je persoonsgegevens omgaan vind je in ons privacystatement.');
    await expect(this.page.locator('form')).toContainText('Slimme meter allocatieBij dit contract hoort dat we je verbruik en de actuele tarieven aan je kunnen laten zien. En dat we je hierover advies en inzicht kunnen geven. We vragen daarom de kwartierwaarden stroom en/of de dagwaarden gas van je slimme meter(s) op bij je netbeheerder. Dit is dus noodzakelijk voor de uitvoering van de overeenkomst. Je netbeheerder gebruikt de uurstanden uit je slimme stroommeter volgens individuele Slimme Meter Allocatie. Op deze manier kan je netbeheerder precies je verbruik berekenen en controleren of wij de inkoop van stroom hebben afgestemd op het gebruik voor je aansluiting.');
  }


  public async verifyCustomerProvidedDetailsOnControlPageVastContract(){

    console.log("Verifying customer provided details on control page")
    await this.page.getByRole('textbox', { name: 'Rekeningnummer (IBAN)' }).fill('NL63 INGB 5198 4917 56');
    await expect(this.page.locator('form')).toContainText('BedenktijdJe hebt recht op 14 dagen bedenktijd.');
    await expect(this.page.locator('form')).toContainText('Wanneer je klikt op onderstaande button, ga je akkoord met de voorwaarden en tarieven en ga je een betalingsverplichting met Eneco aan. Tevens machtig je Eneco, totdat je deze weer intrekt, tot automatische incasso, vanaf de door jou opgegeven rekening, van de verschuldigde maand- en jaarbedragen voor energie en daarbij behorende producten en diensten.');
  
    await expect(this.page.locator('form')).toContainText('Voor het contract geldt een opzegtermijn van 30 dagen. Zeg je het contract op voor de afgesproken einddatum, dan kan een opzegboete in rekening worden gebracht');
    await expect(this.page.locator('form')).toContainText('Je hebt het recht om bezwaar te maken tegen verwerkingen van je persoonsgegevens, waarvoor we een gerechtvaardigd belang hebben. Meer informatie over hoe dit recht van bezwaar werkt en hoe we met je persoonsgegevens omgaan vind je in ons privacystatement');
  }
}