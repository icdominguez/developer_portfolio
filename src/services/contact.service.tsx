import { ApiClient } from "../lib/ApiClient";

export type ContactPayload = {
    name: string;
    email: string;
    message: string;
};

export type ContactResponse = {
    ok: boolean;
};

export async function sendContact(payload: ContactPayload) {
    const res = await ApiClient.post<ContactResponse>("/contact", payload);
    return res.data;
}
