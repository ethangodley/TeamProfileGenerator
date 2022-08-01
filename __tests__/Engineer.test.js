// Tests Engineer class creates and operates correctly


const Engineer = require("../lib/engineer");
describe('Engineer', () => {
    it('should return a string for each component of the Engineer class using getters', () => {
        const engineer = new Engineer("Paul", "1", "paul@me.com", "paulpaul");
        expect(engineer.getName()).toBe("Paul");
        expect(engineer.getID()).toBe("1");
        expect(engineer.getEmail()).toBe("paul@me.com");
        expect(engineer.getRole()).toBe("Engineer");
        expect(engineer.getGithub()).toBe("paulpaul");
    });
})