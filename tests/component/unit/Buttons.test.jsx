import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { DEFAULT_VALUES, ThemeContextProvider } from '../../../src/context/ThemeContext';
import { PrimaryButton } from '../../../src/components/generics/buttons/PrimaryButton';
import { ButtonVariants } from '../../../src/components/generics/buttons/ButtonProps';
// import {describe, it, expect} from "vitest"

const dummyResponse = {
    status: 200,
    message: "",
    data: DEFAULT_VALUES.theme
};

describe("Button ", () => {
    it("should display correct primary styles", async () => {
        render(
            <ThemeContextProvider
                themeFetcher={{
                    get: () => Promise.resolve(dummyResponse)
                }}
            >
                <PrimaryButton>
                    Hello there
                </PrimaryButton>
            </ThemeContextProvider>
        );

        await waitFor(async () => {
            const button = screen.getByTestId("themeButton");
            expect(button).toBeInTheDocument()
            expect(button).toHaveStyle({
                "background-color": DEFAULT_VALUES.theme.primaryColor,
                "color": DEFAULT_VALUES.theme.onPrimary
            });

            await userEvent.hover(button)
            expect(button).toHaveStyle({
                "background-color": DEFAULT_VALUES.theme.primaryVariantColor,
                "color": DEFAULT_VALUES.theme.onPrimary
            });
        });


    });

    it("should display correct primary VARIANT styles", async () => {
        render(
            <ThemeContextProvider
                themeFetcher={{
                    get: () => Promise.resolve(dummyResponse)
                }}
            >
                <PrimaryButton
                    variant={ButtonVariants.OUTLINED}
                >
                    Hello there
                </PrimaryButton>
            </ThemeContextProvider>
        );

        await waitFor(async () => {
            const button = screen.getByTestId("themeButton");
            expect(button).toBeInTheDocument()
            expect(button).toHaveStyle({
                "background-color": "rgba(255,255,255,0)",
                "color": DEFAULT_VALUES.theme.primaryColor
            });
            await userEvent.hover(button)
            expect(button).toHaveStyle({
                "background-color": DEFAULT_VALUES.theme.primaryColor,
                "color": DEFAULT_VALUES.theme.onPrimary
            });
        });
    });
});