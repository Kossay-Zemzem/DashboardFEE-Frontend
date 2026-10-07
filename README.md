# DashboardFEE - UI prototype

> [!NOTE]
> This repository is an **early-stage UI prototype** developed in 2025 as part of an **academic team project**. It serves as an archive of my early frontend learning journey. However, this repository is outdated and does not reflect my current software engineering practices, Git workflows, architectural choices, or code quality standards

## Academic project context
Dashboard for the organizing committees of the ENICarthage Career Fair (Forum des Entreprises).

This project involves the development of a management and scheduling platform for the ENICarthage Career Fair, created as part of a web development course project.

## Technical overview
- **Framework:** Angular 16
- **Styling:** TailwindCSS 3.4
- A mock server was used to simulate a REST API for local UI development and testing using JSON-Server.
  
---
## Local Setup

To populate the application during local testing, a sample dataset is included in the repository at `src/assets/data/mock/db.json`.

1. **Start the Mock server:**  
In your terminal, run the following command from the root folder:
```bash
npx json-server .\src\assets\data\mock\db.json --port 3000
```

2. **Install Dependencies:**
  ```bash
   npm install
   ```
3. **Start the Angular Application:**
  ```bash
   ng serve 
   ```
