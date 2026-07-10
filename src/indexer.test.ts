import { describe, it } from "vitest";
import { createTestIndexer, type UpgradeableProxy_AdminChanged } from "envio";
import { TestHelpers } from "envio";

describe("UpgradeableProxy contract AdminChanged event tests", () => {
  it("UpgradeableProxy_AdminChanged is created correctly", async (t) => {
    const indexer = createTestIndexer();

    // Creating mock for UpgradeableProxy contract AdminChanged event
    const event = {
      contract: "UpgradeableProxy" as const,
      event: "AdminChanged" as const,
      params: {
        previousAdmin: TestHelpers.Addresses.defaultAddress,
        newAdmin: TestHelpers.Addresses.defaultAddress,
      },
    };

    await indexer.process({
      chains: {
        1: {
          simulate: [event],
        },
      },
    });

    // Getting the actual entity from the test indexer
    let actualUpgradeableProxyAdminChanged = await indexer.UpgradeableProxy_AdminChanged.getOrThrow("1_0_0");

    // Creating the expected entity
    const expectedUpgradeableProxyAdminChanged: UpgradeableProxy_AdminChanged = {
      id: "1_0_0",
      previousAdmin: event.params.previousAdmin,
      newAdmin: event.params.newAdmin,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    t.expect(actualUpgradeableProxyAdminChanged, "Actual UpgradeableProxyAdminChanged should be the same as the expected UpgradeableProxyAdminChanged").toEqual(expectedUpgradeableProxyAdminChanged);
  });
});

describe("Indexer smoke test", () => {
  it("processes the first block with events on chain 1", async (t) => {
    const indexer = createTestIndexer();

    const result = await indexer.process({ chains: { 1: {} } });

    t.expect(result.changes.length, "Should have at least one change").toBeGreaterThan(0);
    const firstChange = result.changes[0]!;
    t.expect(firstChange.chainId).toBe(1);
    t.expect(firstChange.eventsProcessed).toBeGreaterThan(0);
  }, 60_000);
});
