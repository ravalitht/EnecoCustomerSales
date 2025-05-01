import { test, expect } from '../utilities/hooks';


test('Happy flow 1', async ({ pageManager }) => {

   test.setTimeout(333*1000)
   await pageManager.getenecohomepageobj().landToEnecoHome();
   await pageManager.getenecohomepageobj().fillRequestEnergyDetails();
   await pageManager.getberekenpageObj().selectTyepOfEnergySupplyEG();
   await pageManager.getberekenpageObj().selectHelpmeEstimateQuestion();
   await pageManager.getberekenpageObj().doyouhaveSmartmeterQuestionYes()
   await pageManager.getberekenpageObj().doyouhaveSolarPanelsQuestionYes();
   await pageManager.getberekenpageObj().areyouMovingQuestionYes();

   await pageManager.getaanbodpageObj().selectDynamicContract();
   await pageManager.getaanbodpageObj().validateyourOfferSectionEG();

   await pageManager.getgevenspageobj().selectStartDateOfDelivery();
   await pageManager.getgevenspageobj().selectIsResidentialAddressYesQuestion();
   await pageManager.getgevenspageobj().fillPersonnelInformation();
   await pageManager.getgevenspageobj().fillContactInformation();
   await pageManager.getgevenspageobj().verifyCustomerProvidedDetailsOnControlPage();

});


