const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, email, and school if provided valid arguments", () => {
            const intern = new Intern("Jerome", 1, "farleybaconchicken@gmail.com", "ucberkeley")
            expect(intern.name).toEqual("Jerome");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("farleybaconchicken@gmail.com")
            expect(intern.school).toEqual("ucberkeley")
        })

        it("should throw an error if school is missing", () => {
            const cb = () => new Intern("Jerome", 1, "farleybaconchicken@gmail.com")

            expect(cb).toThrow()
        })

        it("should throw an error if school is not a string", () => {
            const cb = () => new Intern("Jerome", 1, "farleybaconchicken@gmail.com", 1)

            expect(cb).toThrow()
        })
    })

    describe("getSchool", () => {
        it("should return an interns school username", () => {
            const intern = new Intern("Jerome", 1, "farleybaconchicken@gmail.com", 'ucberkeley')

            expect(intern.getSchool()).toEqual("ucberkeley")
        })
    })

    describe("getRole", () => {
        it("should return an interns role", () => {
            const intern = new Intern("Jerome", 1, "farleybaconchicken@gmail.com", 'ucberkeley')

            expect(intern.getRole()).toEqual("Intern")
        })
    })
})