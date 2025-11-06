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

function printTeacher({ firstName, lastName }: { firstName: string, lastName: string }): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
    (teacher: { firstName: string; lastName: string }): string;
}

const printVar: printTeacherFunction = printTeacher;

console.log(printVar({ "firstName": "Lord", "lastName": "Abiolla" }))
