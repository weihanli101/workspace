[![](https://github.com/thechausenone/workspace/wiki/images/logo-with-text.png)](https://github.com/thechausenone/workspace/wiki)

# Introduction to Workspace

Workspace is a cross-platform desktop application that allows users to configure, manage, and quick-launch application/file windows with ease. Each _window_ in Workspace corresponds to an application/file window and a grouping of _windows_ are called _boards_. Users are able to manage and configure these _boards_ to suit their needs, and once done, each board can be activated to launch all its associated _windows_. Once everything is configured the first time around, launching groups of application/file windows becomes as easy as clicking a button.

_Main technologies used: Angular, Electron, Firebase_

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To start, you will need to have the Node Package Manager (npm) installed locally on your machine. 

For information on how to do this, please visit the following link: https://www.npmjs.com/get-npm 

### Installing

Once you have npm installed, you can proceed with the steps listed in this section.

Clone this repository locally :

```
git clone https://github.com/thechausenone/workspace.git
```

Navigate into your local Workspace project directory :

```
cd workspace
```

Install project dependencies using npm :

```
npm install
```

If you want the ability to generate Angular components with Angular-cli (not required):

```
npm install -g @angular/cli
```

## Running the project

Be in the Workspace project directory and use either of the following commands:

To run the project in development mode,

```
npm start
```

To run the project in production mode (**required to activate boards**),

```
npm run electron:prod
```


## Authors

* **David Chau** - *development* - [thechausenone](https://github.com/thechausenone)
* **Jiwan Kang** - *development* - [jiwankang](https://github.com/jiwankang)
* **Weihan Li** - *project idea and development* - [weihanli101](https://github.com/weihanli101)

## Acknowledgments

* **maximegris** for his [angular-electron](https://github.com/maximegris/angular-electron) project which was used as the starting template for Workspace

