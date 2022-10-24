const Employee = require('../src/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it('Should create an object with a name, id, and email attached', () => {
            const employee = new Employee('Jake', '3242', 'fake@email.com')
    
            expect(employee.name).toEqual('Jake');
            expect(employee.id).toEqual('3242');
            expect(employee.email).toEqual('fake@email.com');
        });
    });

    describe('get name', () => {
        it('Should return employee name', () => {
            const employee = new Employee('Jake', '3242', 'fake@email.com')
    
            expect(employee.getName()).toEqual('Jake');
        });
    });

    describe('get id', () => {
        it('Should return employee id', () => {
            const employee = new Employee('Jake', '3242', 'fake@email.com')
    
            expect(employee.getId()).toEqual('3242');
        });
    });

    describe('get email', () => {
        it('Should return employee email', () => {
            const employee = new Employee('Jake', '3242', 'fake@email.com')
    
            expect(employee.getEmail()).toEqual('fake@email.com');
        });
    });

    describe('get role', () => {
        it('Should return employee role', () => {
            const employee = new Employee('Jake', '3242', 'fake@email.com')
    
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});