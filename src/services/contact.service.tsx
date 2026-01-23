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
    console.log("URL llamada:", res.request?.responseURL);
    return res.data;
}
