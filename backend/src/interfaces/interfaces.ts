export interface IUser {
    firstName: string,
    lastName: string,
    university: string,
    department: string,
    year: string,
    email: string,
    password: string,
    confirmPassword: string,
}
export interface ApiSuccessResponse<T> {
    success: true;
    message: string;
    data: T;

}

export interface ApiErrorResponse {
    success: false;
    message: string;
    error?: string;
}