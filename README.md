# EnecoCustomerSales

# Playwright TypeScript Testing Framework

This project is built as part of Interview process of Eneco Test Automation Engineer role.
This repository contains testing framework built using **Playwright with TypeScript**. The project adheres to **Test-Driven Development (TDD)** principles and uses the **Page Object Model (POM)** design pattern to ensure test scalability and maintainability. Dynamic test data generation and integrated Playwright reporting are included by default.

---

##  Features

-  **Test-Driven Development (TDD)**
-  **Page Object Model (POM)**
-  **Dynamic test data**
-  **Playwright’s built-in HTML reports**
-  **GitHub for version control**
-  **Visual Studio Code (VS Code) as the IDE** (recommended)

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/downloads)

---

## Installation Instructions

### Step 1: Clone the Repository

git clone https://github.com/ravalitht/EnecoCustomerSales

### Step 2: Change directory

cd your-project

### Step 3: Install Playwright and other dependencies

npx install

### Step 4: Run Tests in Visual Studio Code

Make sure the VS Code terminal is open in your project directory.

## To Run a Specific Test File, Run following on the Terminal

### Windows:
npx playwright test tests/example.spec.ts

### macOS:
npx playwright test tests/example.spec.ts

### To Run all tests on Windows:
npx playwright test

### To Run all tests on macOS:
npx playwright test


## Project Structure

```
ENECOCUSTOMERSALES/
├── .github/
│ └── workflows/ # GitHub Actions workflows
├── node_modules/ # Project dependencies
├── playwright-report/ # Playwright test reports
│ └── index.html # Entry point to view the test report
├── src/
│ ├── pages/ # Page object files
│ │ ├── aanbodPage.ts
│ │ ├── berekenPage.ts
│ │ ├── enecoHomePage.ts
│ │ ├── gegevensPage.ts
│ │ ├── testData/
│ │ ├── customerData.ts
│ │ └── postcodes.ts
│ ├── tests/
│ │ └── CustomerSalesFlow.spec.ts # Test specification
│ └── utilities/ # Utility/helper functions
│ ├── aasserts.ts
│ ├── applicationURLs.ts
│ ├── hooks.ts
│ └── pageManager.ts
├── test-results/ # Test output/results
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts # Playwright configuration file
└── README.md

```
## Report
### After running tests, view Playwright's HTML report with:
npx playwright show-report