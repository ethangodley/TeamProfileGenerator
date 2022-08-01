// Tests Intern class creates and operates correctly


const Intern = require("../lib/intern");
describe('Intern', () => {
    it('should return a string for each component of the Intern class using getters', () => {
        const intern = new Intern("Paul", "1", "paul@me.com", "GHS");
        expect(intern.getName()).toBe("Paul");
        expect(intern.getID()).toBe("1");
        expect(intern.getEmail()).toBe("paul@me.com");
        expect(intern.getRole()).toBe("Intern");
        expect(intern.getSchool()).toBe("GHS");
    });
})