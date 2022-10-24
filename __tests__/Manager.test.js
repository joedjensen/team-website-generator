const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and office number if provided valid arguments", () => {
            const manager = new Manager("Jerome", 1, "farleybaconchicken@gmail.com", 1)

            expect(manager.name).toEqual("Jerome");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("farleybaconchicken@gmail.com")
            expect(manager.officeNumber).toEqual(1)
        })

        it("should throw an error if office number is missing", () => {
            const cb = () => new Manager("Jerome", 1, "farleybaconchicken@gmail.com")

            expect(cb).toThrow()
        })

        it("should throw an error if office number is not a number", () => {
            const cb = () => new Manager("Jerome", 1, "farleybaconchicken@gmail.com", "office")

            expect(cb).toThrow()
        })
    })

    describe("getRole", () => {
        it("should return an managers role", () => {
            const manager = new Manager("Jerome", 1, "farleybaconchicken@gmail.com", 1)

            expect(manager.getRole()).toEqual("Manager")
        })
    })
})