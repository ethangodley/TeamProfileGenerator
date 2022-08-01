// Tests employee class creates and operates correctly

const Employee = require("../lib/employee");
describe('Employee', () => {
    it('should return a string for each component of the Employee class using getters', () => {
        const employee = new Employee("Paul", "1", "paul@me.com");
        expect(employee.getName()).toBe("Paul");
        expect(employee.getID()).toBe("1");
        expect(employee.getEmail()).toBe("paul@me.com");
        expect(employee.getRole()).toBe("Employee");
    });
})