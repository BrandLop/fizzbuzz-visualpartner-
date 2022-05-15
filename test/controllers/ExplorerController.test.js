const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Tests for ExplorerController", () => {
    test("Filter explorers by stack (javascript)", () => {
        const explorersbyStack = ExplorerController.filterExplorersByStack("javascript");
        expect(explorersbyStack.length).toBe(11);
    });

    test("Filter explorers by stack (elixir)", () => {
        const explorersbyStack = ExplorerController.filterExplorersByStack("elixir");
        expect(explorersbyStack.length).toBe(9);
    });
});