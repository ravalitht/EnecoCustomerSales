import { test, expect } from '../utilities/hooks';


test('Sales Flow EG Dynamic Contract', async ({ pageManager }) => {

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
   await pageManager.getgevenspageobj().verifyCustomerProvidedDetailsOnControlPageDynamicContract();

});



test('Sales Flow E Only Vast Contract', async ({ pageManager }) => {

   await pageManager.getenecohomepageobj().landToEnecoHome();
   await pageManager.getenecohomepageobj().fillRequestEnergyDetails();

   await pageManager.getberekenpageObj().selectTyepOfEnergySupplyEOnly();
   await pageManager.getberekenpageObj().selectEnterConsumptionforEOnly();
   await pageManager.getberekenpageObj().doyouhaveSolarPanelsQuestionNo();
   await pageManager.getberekenpageObj().areyouMovingQuestionNo();

   await pageManager.getaanbodpageObj().selectVastContract();
   await pageManager.getaanbodpageObj().validateyourOfferSectionEOnly();

   await pageManager.getgevenspageobj().selectStartDateOfDelivery();
   await pageManager.getgevenspageobj().selectIsResidentialAddressYesQuestion();
   await pageManager.getgevenspageobj().fillPersonnelInformation();
   await pageManager.getgevenspageobj().fillContactInformation();
   await pageManager.getgevenspageobj().verifyCustomerProvidedDetailsOnControlPageVastContract();

});



test('Sales Flow G Only Vast 3 Jaar Contract', async ({ pageManager }) => {

   await pageManager.getenecohomepageobj().landToEnecoHome();
   await pageManager.getenecohomepageobj().fillRequestEnergyDetails();

   await pageManager.getberekenpageObj().selectTyepOfEnergySupplyGOnly();
   await pageManager.getberekenpageObj().selectEnterConsumptionforGOnly();
   await pageManager.getberekenpageObj().areyouMovingQuestionYes();

   await pageManager.getaanbodpageObj().selectVastGasContractthreeJaar();
   await pageManager.getaanbodpageObj().selectCo2QuestionNo();
   await pageManager.getaanbodpageObj().validateyourOfferSectionGOnly();

   await pageManager.getgevenspageobj().selectStartDateOfDelivery();
   await pageManager.getgevenspageobj().selectIsResidentialAddressYesQuestion();
   await pageManager.getgevenspageobj().fillPersonnelInformation();
   await pageManager.getgevenspageobj().fillContactInformation();
   await pageManager.getgevenspageobj().verifyCustomerProvidedDetailsOnControlPageVastContract();

});


