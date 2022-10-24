const Manager = require('../src/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('Should create an object with a name, id, email, and office number', () => {
            const manager = new Manager('Jake', '3242', 'fake@email.com', '7')
    
            expect(manager.name).toEqual('Jake');
            expect(manager.id).toEqual('3242');
            expect(manager.email).toEqual('fake@email.com');
            expect(manager.officeNumber).toEqual('7');
        });
    });

    describe('get name', () => {
        it('Should return manager name', () => {
            const manager = new Manager('Jake', '3242', 'fake@email.com', '7')
    
            expect(manager.getName()).toEqual('Jake');
        });
    });

    describe('get id', () => {
        it('Should return manager id', () => {
            const manager = new Manager('Jake', '3242', 'fake@email.com', '7')
    
            expect(manager.getId()).toEqual('3242');
        });
    });

    describe('get name', () => {
        it('Should return manager email', () => {
            const manager = new Manager('Jake', '3242', 'fake@email.com', '7')
    
            expect(manager.getEmail()).toEqual('fake@email.com');
        });
    });

    describe('get name', () => {
        it('Should return manager role', () => {
            const manager = new Manager('Jake', '3242', 'fake@email.com', '7')
    
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});