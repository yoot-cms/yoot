export type User = { 
    email: string,
    username: string,
    password: string, 
    id: string, 
    plan: string, 
    role: string, 
    profile_picture: string 
}

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            user: User
        }
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
