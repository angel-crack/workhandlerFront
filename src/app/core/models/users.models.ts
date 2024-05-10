export interface UserModel {
    name: string,
    lastName: string,
    email: string,
    password: string,
    role: "Tier 1" | "Tier 2" | "Tier 3"
    
}