'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the exceptional ' + chalk.red('yeoman-generator-boilerplate') + ' generator!'
        ));

        const DEFAULT_APPTYPE = 'blankProject';

        const prompts = [{
            type: 'list',
            name: 'project',
            message: 'Wich your project type for today?',
            choices: [
                {
                    name: '1 - A new Landing Page',
                    value: 'landingPage'
                },{
                    name: '2 - A new Full Boilerplate',
                    value: 'fullBoilerplate'
                },{
                    name: '3 - A Blank Project',
                    value: DEFAULT_APPTYPE
                }
            ],
            default: DEFAULT_APPTYPE
        }];

        return this.prompt(prompts).then(props => {
            // To access props later use this.props.someAnswer;
            this.props = props;
        });
    }

    writing() {
        this.fs.copy(
            this.templatePath('_index.html'),
            this.destinationPath('index.html')
        );
    }

    install() {
        this.installDependencies();
    }
};
