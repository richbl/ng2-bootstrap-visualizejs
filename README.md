[![Known Vulnerabilities](https://snyk.io/test/github/richbl/ng2-bootstrap-visualizejs/badge.svg)](https://snyk.io/test/github/richbl/ng2-bootstrap-visualizejs)

# Ng2-Bootstrap-Visualizejs
A demonstration application that draws [Jaspersoft](http://www.jaspersoft.com/) report/dashboard resources with the [Visualize.js](http://community.jaspersoft.com/project/visualizejs) library using the [tabs](http://valor-software.com/ng2-bootstrap/#/tabs) and [alerts](http://valor-software.com/ng2-bootstrap/#/alerts) directives from the [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) library. All implemented using the [Angular Framework](https://angular.io/) (Angular 2.0).

## User Login Screen
![enter image description here](https://cloud.githubusercontent.com/assets/10182110/16470095/16c8664a-3e09-11e6-95b5-93be3e0ccb0f.png)
## Tabbed Result Views
![enter image description here](https://cloud.githubusercontent.com/assets/10182110/16470115/2ad353a2-3e09-11e6-856b-6fee94ea7edf.png)

![enter image description here](https://cloud.githubusercontent.com/assets/10182110/16470519/7767b4ae-3e0b-11e6-867e-65aaf4aff737.png)

![enter image description here](https://cloud.githubusercontent.com/assets/10182110/16470559/be02fd6a-3e0b-11e6-8a50-85ec58fdc8b8.png)

## Based on Angular 2-Quickstart
This repository is based on the [Angular 2-Quickstart](https://github.com/valor-software/angular2-quickstart), which is provided by Valor Software to demo a simple implementation of their [Native Angular 2 Directives for Bootstrap](http://valor-software.com/ng2-bootstrap/#/).

> Note that this project has not been forked from the [Angular 2-Quickstart](https://github.com/valor-software/angular2-quickstart) project, so no updates made to that project will be reflected in this project.


## Prerequisites

 - [Jaspersoft](http://jaspersoft.com/quick-start) software and server resources (*i.e.* JasperReports Server)
 - [Angular Framework](https://angular.io/)  (*aka*, Angular 2.0) library resources
 - [Ng2-Bootstrap](https://github.com/valor-software/ng2-bootstrap) library resources

### Jaspersoft JasperReports Server
Required software and servers are well described on the [Jaspersoft website](http://jaspersoft.com/quick-start).

### Angular Framework
Node.js and npm are essential to Angular 2 development. <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm"> Get them now</a> if they're not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

> This project was originally developed using Angular 2.0.0-RC3.

### Ng2-Bootstrap
The [ng2-bootstrap](https://github.com/valor-software/ng2-bootstrap) library is available as an [npm package](https://www.npmjs.com/package/ng2-bootstrap), which makes it extremely easy to implement in this or any Angular Framework project. When first installing npm packages, project dependencies should install the latest package.

## Getting Started

Clone this repo into new project folder (*e.g.*, `my-proj`).
```bash
git clone  https://github.com/richbl/ng2-bootstrap-visualizejs  my-proj
cd my-proj
```

### Install npm Packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

> Attention Windows developers: you must run all of these commands in administrator mode.

```bash
npm install
```

### Edit Visualize.js Configuration

Configuration details for the Visualize.js library are currently managed in two files:

-`index.html`: sets the library include for the Visualize.js library script (*e.g.*,  `<script src="http://visualizejsdemo.jaspersoft.com/jasperserver-pro/client/visualize.js"></script>)`
-`app/vjs.config.service.ts`: set user and resource details (*i.e.*, reports and dashboards) 

It's expected that future releases of this demonstration should permit for the dynamic loading of the Visualize.js library in the `vjs.config.service.ts` component.

> Login credentials for this demo: **joeuser/joeuser**.

### Start the Server

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

```bash
npm start
```

> By default, the server will be running on http://localhost:3000. Open a browser page on this URL and you should see the application running.

Shut it down manually with Ctrl-C.

**You're ready to go!**
