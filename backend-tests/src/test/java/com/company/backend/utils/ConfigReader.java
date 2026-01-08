package com.company.backend.utils;

import java.io.InputStream;
import java.util.Properties;

public class ConfigReader {

    private static Properties properties = new Properties();

    static {
        try (InputStream is =
                     ConfigReader.class.getClassLoader()
                             .getResourceAsStream("config/application.properties")) {

            properties.load(is);
        } catch (Exception e) {
            throw new RuntimeException("Failed to load config");
        }
    }

    public static String get(String key) {
        return properties.getProperty(key);
    }
}
