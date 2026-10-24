# CloudLaunch — Cloud Computing & DevOps

A responsive static website built as part of the Cognevance Technologies Cloud Computing & DevOps internship.

## Project Overview

CloudLaunch demonstrates the fundamentals of static website development, version control, cloud hosting, and website monitoring.

The project is developed using HTML, CSS, and JavaScript, with Git and GitHub used to manage source code and track changes.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Project Structure

```text
cognevance_static_website/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Features

- Responsive website layout
- Minimal black and yellow visual design
- Navigation between page sections
- JavaScript interaction test
- Version-controlled source code

## Local Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/silassamuel02/cognevance_static_website.git
   ```

2. Open the project folder.

3. Open `index.html` in a browser, or use the VS Code Live Server extension.

## Version Control

Git is used to track project changes, and GitHub hosts the source repository.

Changes can be saved with:

```bash
git add .
git commit -m "Describe your changes"
git push
```

## Deployment

Cloud hosting and public deployment will be configured after the website and project documentation are ready.

**Deployment URL:** To be added after deployment.

## Monitoring and Security

The planned monitoring setup uses an external uptime monitoring service to check the availability of the published website.

HTTPS, public accessibility, and monitoring notifications will be verified after deployment.


## Security and Domain Configuration

### HTTPS
The deployed website will use HTTPS to encrypt communication between the browser and the hosting platform. HTTPS availability will be verified after deployment.

### Custom Domain
Custom-domain configuration will be evaluated during deployment. The project may initially use the hosting platform's default domain to avoid unnecessary costs.

### Source Code Security
- No passwords, API keys, or private credentials should be committed to the repository.
- GitHub repository permissions should be reviewed.
- External links and website functionality should be tested before release.

### Verification Status
Security and domain configuration remain pending until the website is deployed and the settings 
have been verified.

## Uptime Monitoring

### Monitoring Tool
UptimeRobot will be used to monitor the availability of the deployed CloudLaunch website.

### Planned Configuration
- **Monitor type:** HTTP(s)
- **Monitor name:** CloudLaunch
- **Target:** Public website URL
- **Purpose:** Check website availability and track response time
- **Notifications:** Email alerts, subject to account configuration and plan limits

### Verification Procedure
1. Deploy the website to a public hosting platform.
2. Add the public website URL to UptimeRobot.
3. Confirm that the monitor reports the website as available.
4. Review the response-time information.
5. Verify alert configuration.
6. Record the monitoring results in the project report.

### Status
Monitoring configuration and live verification are pending deployment.
## Project Status

- [x] Initial website created
- [x] Git repository initialized
- [x] Source code pushed to GitHub
- [x] Website redesign completed
- [ ] Responsive testing completed
- [ ] Cloud deployment
- [ ] Uptime monitoring
- [ ] Final screenshots and project report

## Internship

**Organization:** Cognevance Technologies  
**Domain:** Cloud Computing & DevOps  
**Project:** Cloud-Based Static Website Deployment
