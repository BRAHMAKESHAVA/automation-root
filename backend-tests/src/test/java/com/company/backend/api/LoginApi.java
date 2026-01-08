package com.company.backend.api;

public class LoginApi {

    public boolean login(String user, String pass) {
        // Simulated API call
        return user != null && pass != null;
    }

    public boolean logout() {
        return true;
    }
}
