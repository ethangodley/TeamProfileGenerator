// Tests Manager class creates and operates correctly


const Manager = require("../lib/manager");
describe('Manager', () => {
    it('should return a string for each component of the Manager class using getters', () => {
        const manager = new Manager("Paul", "1", "paul@me.com", "2");
        expect(manager.getName()).toBe("Paul");
        expect(manager.getID()).toBe("1");
        expect(manager.getEmail()).toBe("paul@me.com");
        expect(manager.getRole()).toBe("Manager");
        expect(manager.getOffice()).toBe("2");
    });
})