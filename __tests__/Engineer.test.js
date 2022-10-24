const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and github if provided valid arguments", () => {
            const engineer = new Engineer("Jerome", 1, "farleybaconchicken@gmail.com", "mfinjerome")
            expect(engineer.name).toEqual("Jerome");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("farleybaconchicken@gmail.com")
            expect(engineer.github).toEqual("mfinjerome")
        })

        it("should throw an error if github is missing", () => {
            const cb = () => new Engineer("Jerome", 1, "farleybaconchicken@gmail.com")

            expect(cb).toThrow()
        })

        it("should throw an error if github is not a string", () => {
            const cb = () => new Engineer("Jerome", 1, "farleybaconchicken@gmail.com", 1)

            expect(cb).toThrow()
        })
    })

    describe("getGithub", () => {
        it("should return an engineers github username", () => {
            const engineer = new Engineer("Jerome", 1, "farleybaconchicken@gmail.com", 'mfinjerome')

            expect(engineer.getGithub()).toEqual("mfinjerome")
        })
    })

    describe("getRole", () => {
        it("should return an engineers role", () => {
            const engineer = new Engineer("Jerome", 1, "farleybaconchicken@gmail.com", 'mfinjerome')

            expect(engineer.getRole()).toEqual("Engineer")
        })
    })
})