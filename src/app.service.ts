import { Injectable } from "@nestjs/common";

@Injectable() // makes it a provider
export class AppService {
    getUsers() {
        return [{id: 1, name: 'UserName'}]
    }
}