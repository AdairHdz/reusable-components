import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DEFAULT_VALUES, ThemeContextProvider } from '../../../src/context/ThemeContext';
import {Alert} from "../../../src/components/generics/alerts/Alert";
import {faker} from "@faker-js/faker";

const dummyResponse = {
    status: 200,
    message: "",
    data: {
        primaryColor: "#8C278F",
        primaryVariantColor: "#ce73d1",
        secondaryColor: "#34C38F",
        secondaryVariantColor: "#9adbc3",
        tertiaryColor: "#E1A401",
        tertiaryVariantColor: "#e6c15e",
        backgroundColor: "#FFFFFF",
        surface: "#FFFFFF",
        error: "#B00020",
        onPrimary: "#FFFFFF",
        onSecondary: "#FFFFFF",
        onTertiary: "#FFFFFF",
        onBackground: "#000000",
        onSurface: "#000000",
        onError: "#FFFFFF"
    }
};

describe("Alert ", () => {
    it("should display correct primary styles when status is 200 - 299", async () => {
        render(
            <ThemeContextProvider
                themeFetcher={{
                    get: () => Promise.resolve(dummyResponse)
                }}
            >
                <Alert
                    status={faker.number.int({
                        min: 200,
                        max: 299
                    })}
                    message='Message'
                />
            </ThemeContextProvider>
        );

        await waitFor(async () => {
            const alert = screen.getByTestId("themeAlert");
            expect(alert).toBeInTheDocument()
            expect(alert).toHaveStyle({
                "background-color": DEFAULT_VALUES.theme.primaryColor,
                "color": DEFAULT_VALUES.theme.onPrimary
            });            
        });
    });


    it("should display correct error styles when status is not in range of 2XX statuses", async () => {
        render(
            <ThemeContextProvider
                themeFetcher={{
                    get: () => Promise.resolve(dummyResponse)
                }}
            >
                <Alert
                    status={faker.number.int({
                        min: 400,
                        max: 500
                    })}
                    message='Message'
                />
            </ThemeContextProvider>
        );

        await waitFor(async () => {
            const alert = screen.getByTestId("themeAlert");
            expect(alert).toBeInTheDocument()
            expect(alert).toHaveStyle({
                "background-color": DEFAULT_VALUES.theme.error,
                "color": DEFAULT_VALUES.theme.onError
            });            
        });
    });

    
});