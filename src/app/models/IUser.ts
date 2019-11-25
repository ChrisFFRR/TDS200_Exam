export default interface IUser {
    username?: string;
    password: string;
    firstname?: string;
    surname?: string;
    email: string;
    city?: string;
    isProprietor?: boolean;
}

/*
her blir bare email og password brukt for autentisering, de ubrukte feltene ville ha blitt brukt i forhold til rollebasert auth.
 */

