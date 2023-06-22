import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DEFAULT_VALUES, ThemeContextProvider } from '../../../src/context/ThemeContext';
import {Alert} from "../../../src/components/generics/alerts/Alert";
import {faker} from "@faker-js/faker";

const dummyResponse = {
    status: 200,
    message: "",
    data: DEFAULT_VALUES.theme
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