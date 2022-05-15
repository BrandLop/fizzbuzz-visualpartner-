const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
    test("Requerimiento 1: Calcular todos los explorers en una misión", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Get explorers list filtered by stack (javascript)", () => {
        const explorers = [
            {
                name: "Woopa13",
                githubUsername: "ajolonauta13",
                score: 13,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
            },
            {
                name: "Woopa14",
                githubUsername: "ajolonauta14",
                score: 14,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
            },
            {
                name: "Woopa15",
                githubUsername: "ajolonauta15",
                score: 15,
                mission: "node",
                stacks: ["elixir", "groovy", "reasonML", "elm"],
            },
        ];
        const explorersByStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersByStack).toMatchObject(
            [
                {
                    name: expect.any(String),
                    githubUsername: expect.any(String),
                    score: expect.any(Number),
                    mission: expect.any(String),
                    stacks: expect.arrayContaining(["javascript"])
                },
                {
                    name: expect.any(String),
                    githubUsername: expect.any(String),
                    score: expect.any(Number),
                    mission: expect.any(String),
                    stacks: expect.arrayContaining(["javascript"])
                }
            ]
        );
    });

    test("Get explorers list filtered by stack (elixir)", () => {
        const explorers = [
            {
                name: "Woopa13",
                githubUsername: "ajolonauta13",
                score: 13,
                mission: "node",
                stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
            },
            {
                name: "Woopa14",
                githubUsername: "ajolonauta14",
                score: 14,
                mission: "node",
                stacks: ["javascript", "groovy", "reasonML", "elm"],
            },
            {
                name: "Woopa15",
                githubUsername: "ajolonauta15",
                score: 15,
                mission: "node",
                stacks: ["elixir", "groovy", "reasonML", "elm"],
            },
        ];
        const explorersByStack = ExplorerService.getExplorersByStack(explorers, "elixir");
        expect(explorersByStack).toMatchObject(
            [
                {
                    name: expect.any(String),
                    githubUsername: expect.any(String),
                    score: expect.any(Number),
                    mission: expect.any(String),
                    stacks: expect.arrayContaining(["elixir"])
                },
                {
                    name: expect.any(String),
                    githubUsername: expect.any(String),
                    score: expect.any(Number),
                    mission: expect.any(String),
                    stacks: expect.arrayContaining(["elixir"])
                }
            ]
        );
    });
});
