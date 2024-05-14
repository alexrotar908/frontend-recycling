export interface ILogin{
    email:string;
    password:string;
}

export interface IRegister extends ILogin{
    firstName: string;
    name:string;
    address: string;
}

export interface ILoginResponse{
    authToken:string;
}