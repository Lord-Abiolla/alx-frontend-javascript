// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Director extends Teacher {
    numberOfReports: number;
}


// Funciton interface
function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
    firstName = firstName[0];
    return `${firstName}. ${lastName}`;
}

interface printTeacherFunction {
    (teacher: { firstName: string; lastName: string }): string;
}

const printVar: printTeacherFunction = printTeacher;


// Writing class interface
interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}
class StudentClass {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}