/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import { indexer } from "envio";
import type {
  UpgradeableProxy_AdminChanged,
  UpgradeableProxy_Approval,
  UpgradeableProxy_ControllerTransferred,
  UpgradeableProxy_Deprecate,
  UpgradeableProxy_DestroyedBlackFunds,
  UpgradeableProxy_FreeTransferLimitChanged,
  UpgradeableProxy_Initialized,
  UpgradeableProxy_IssuanceQueued,
  UpgradeableProxy_Issue,
  UpgradeableProxy_NewMintingLimit,
  UpgradeableProxy_NewTotalSupplyLimit,
  UpgradeableProxy_OwnerTransferred,
  UpgradeableProxy_Params,
  UpgradeableProxy_Paused,
  UpgradeableProxy_Redeem,
  UpgradeableProxy_ResetIncrementalSupply,
  UpgradeableProxy_Transfer,
  UpgradeableProxy_Unpaused,
  UpgradeableProxy_Upgraded,
} from "envio";

indexer.onEvent({ contract: "UpgradeableProxy", event: "AdminChanged" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.UpgradeableProxy_AdminChanged.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Approval" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.UpgradeableProxy_Approval.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "ControllerTransferred" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_ControllerTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousController: event.params.previousController,
    newController: event.params.newController,
  };

  context.UpgradeableProxy_ControllerTransferred.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Deprecate" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Deprecate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAddress: event.params.newAddress,
  };

  context.UpgradeableProxy_Deprecate.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "DestroyedBlackFunds" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_DestroyedBlackFunds = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _blackListedUser: event.params._blackListedUser,
    _balance: event.params._balance,
  };

  context.UpgradeableProxy_DestroyedBlackFunds.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "FreeTransferLimitChanged" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_FreeTransferLimitChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _oldLimit: event.params._oldLimit,
    _newLimit: event.params._newLimit,
  };

  context.UpgradeableProxy_FreeTransferLimitChanged.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Initialized" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.UpgradeableProxy_Initialized.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "IssuanceQueued" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_IssuanceQueued = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _e2eTag: event.params._e2eTag,
  };

  context.UpgradeableProxy_IssuanceQueued.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Issue" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Issue = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    to: event.params.to,
    amount: event.params.amount,
    _e2eTag: event.params._e2eTag,
  };

  context.UpgradeableProxy_Issue.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "NewMintingLimit" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_NewMintingLimit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _limit: event.params._limit,
    _nextLimit: event.params._nextLimit,
  };

  context.UpgradeableProxy_NewMintingLimit.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "NewTotalSupplyLimit" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_NewTotalSupplyLimit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    _limit: event.params._limit,
    _nextLimit: event.params._nextLimit,
  };

  context.UpgradeableProxy_NewTotalSupplyLimit.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "OwnerTransferred" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_OwnerTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
    wasFirstOwner: event.params.wasFirstOwner,
  };

  context.UpgradeableProxy_OwnerTransferred.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Params" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Params = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    feeBasisPoints: event.params.feeBasisPoints,
    maxFee: event.params.maxFee,
  };

  context.UpgradeableProxy_Params.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Paused" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.UpgradeableProxy_Paused.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Redeem" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    to: event.params.to,
    amount: event.params.amount,
    _e2eTag: event.params._e2eTag,
  };

  context.UpgradeableProxy_Redeem.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "ResetIncrementalSupply" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_ResetIncrementalSupply = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.UpgradeableProxy_ResetIncrementalSupply.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Transfer" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.UpgradeableProxy_Transfer.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Unpaused" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.UpgradeableProxy_Unpaused.set(entity);
});

indexer.onEvent({ contract: "UpgradeableProxy", event: "Upgraded" }, async ({ event, context }) => {
  const entity: UpgradeableProxy_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.UpgradeableProxy_Upgraded.set(entity);
});
