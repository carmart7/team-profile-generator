# readme-generator

## Description

This command line application allows the user to create a high quality team profile html page. The inquirer and file system modules are the a key part of making this application function. The focus for this project is around creating classes and testing them thourougly with jest.



Inquirer is used to get text input from the user via the command line as shown below.

![Image of text input](./assets/images/Code_Eyg0h75g5i.png)

Jest is used to test classes that extend from the Employee class to ensure that they contain all neccesary functionality

```js
describe('Engineer', () => {
    describe('Initialization', () => {
        it('Should create an object with a name, id, email, and attached', () => {
            const engineer = new Engineer('Jake', '3242', 'fake@email.com', 'carmart7')
    
            expect(engineer.name).toEqual('Jake');
            expect(engineer.id).toEqual('3242');
            expect(engineer.email).toEqual('fake@email.com');
            expect(engineer.github).toEqual('carmart7');
        });
    });
});
```

## Technologies Used

- [Node JS](https://nodejs.org/dist/latest-v16.x/docs/api/)
- [Inquirer](https://www.npmjs.com/package/inquirer)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Github](https://github.com/)
- [Jest](https://jestjs.io/docs/getting-started)
