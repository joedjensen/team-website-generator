const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id, and email if provided valid arguments", () => {
            const employee1 = new Employee("Jerome", 1, "farleybaconchicken@gmail.com")
            const employee2 = new Employee("manuel", 2, "sheriff@gmail.com")

            expect(employee1.name).toEqual("Jerome");
            expect(employee1.id).toEqual(1);
            expect(employee1.email).toEqual("farleybaconchicken@gmail.com")
            expect(employee2.name).toEqual("manuel");
            expect(employee2.id).toEqual(2);
            expect(employee2.email).toEqual("sheriff@gmail.com")
        })

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee()

            expect(cb).toThrow()
        })

        it("should throw an error if only provided a name", () => {
            const cb = () => new Employee("Jerome")

            expect(cb).toThrow()
        })

        it("should throw an error if not provided an email", () => {
            const cb = () => new Employee("Jerome", 1)

            expect(cb).toThrow()
        })

        it("should throw an error if name is not string", () => {
            const cb = () => new Employee(1, 1, "farleybaconchicken@gmail.com")

            expect(cb).toThrow()
        })

        it("should throw an error if id is not a number", () => {
            const cb = () => new Employee("Jerome", "jerome", "farleybaconchicken@gmail.com")

            expect(cb).toThrow()
        })

        it("should throw an error if email is not an email address", () => {
            const cb = () => new Employee("Jerome", 1, 1)

            expect(cb).toThrow()
        })
    })

    describe("getName", () => {
        it("should return an employees name", () => {
            const employee = new Employee("Jerome", 1, "farleybaconchicken@gmail.com")

            expect(employee.getName()).toEqual("Jerome")
        })
    })

    describe("getId", () => {
        it("should return an employees ID", () => {
            const employee = new Employee("Jerome", 1, "farleybaconchicken@gmail.com")

            expect(employee.getId()).toEqual(1)
        })
    })

    describe("getEmail", () => {
        it("should return an employees email", () => {
            const employee = new Employee("Jerome", 1, "farleybaconchicken@gmail.com")

            expect(employee.getEmail()).toEqual("farleybaconchicken@gmail.com")
        })
    })
})