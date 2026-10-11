
import { convertCurrency } from "../src/utils.js";

describe("convertCurrency", () => {
    const rates = {
        USD: 1,
        KES: 130,
        EUR: 0.9,
        GBP: 0.75
    };

    test("converts USD to KES", () => {
        expect(convertCurrency(10, "USD", "KES", rates))
            .toBe(1300);
    });
});
