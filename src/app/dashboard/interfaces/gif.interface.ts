import { User } from "../../auth/interfaces";

export interface Gift {
    id: string;
    role: string;
    title: string;
    alt_image: string;
    due_date?: string;
    description?: string;
    budget?: number;
    balance?: number;
    number_participants?: number;
    payers?: number;
    organizer: User;
    bizum?: string;
    account?: string;
    collaborators?: User[];
    participants?: User[];

}