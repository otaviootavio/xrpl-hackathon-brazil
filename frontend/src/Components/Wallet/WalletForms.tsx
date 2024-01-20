import { isInstalled, getNetwork,  getAddress, getPublicKey, sendPayment   } from "@gemwallet/api";
import { useState } from "react";

export interface SendPaymentRequest extends BaseTransactionRequest {
  // The amount to deliver, in one of the following formats:
  // - A string representing the number of XRP to deliver, in drops.
  // - An object where 'value' is a string representing the number of the token to deliver.
  amount: Amount;
  // The unique address of the account receiving the payment
  destination: string;
  // The destination tag to attach to the transaction
  destinationTag?: number;
  // Flags to set on the transaction
  flags?: PaymentFlags;
}
type PaymentFlags = {
  tfNoDirectRipple?: boolean;
  tfPartialPayment?: boolean;
  tfLimitQuality?: boolean;
} | number;

interface Memo {
  memo: {
    memoType?: string;
    memoData?: string;
    memoFormat?: string;
  };
}

interface Signer {
  signer: {
    account: string;
    txnSignature: string;
    signingPubKey: string;
  };
}
type Amount = {
  currency: string;
  issuer: string;
  value: string;
} | string;

interface BaseTransactionRequest {
  // Integer amount of XRP, in drops, to be destroyed as a cost for distributing this transaction to the network.
  // Some transaction types have different minimum requirements.
  fee?: string;
  // The sequence number of the account sending the transaction. A transaction is only valid if the Sequence number is
  // exactly 1 greater than the previous transaction from the same account. The special case 0 means the transaction is
  // using a Ticket instead.
  sequence?: number;
  // Hash value identifying another transaction. If provided, this transaction is only valid if the sending account's
  // previously-sent transaction matches the provided hash.
  accountTxnID?: string;
  // Highest ledger index this transaction can appear in. Specifying this field places a strict upper limit on how long
  // the transaction can wait to be validated or rejected.
  lastLedgerSequence?: number;
  // Additional arbitrary information used to identify this transaction.
  // Each attribute of each memo must be hex encoded.
  memos?: Memo[];
  // Array of objects that represent a multi-signature which authorizes this transaction.
  signers?: Signer[];
  // Arbitrary integer used to identify the reason for this payment, or a sender on whose behalf this transaction is
  // made. Conventionally, a refund should specify the initial payment's SourceTag as the refund payment's
  // DestinationTag.
  sourceTag?: number;
  // Hex representation of the public key that corresponds to the private key used to sign this transaction. If an empty
  // string, indicates a multi-signature is present in the Signers field instead.
  signingPubKey?: string;
  // The sequence number of the ticket to use in place of a Sequence number. If this is provided, Sequence must be 0.
  // Cannot be used with AccountTxnID.
  ticketSequence?: number;
  // The signature that verifies this transaction as originating from the account it says it is from.
  txnSignature?: string;
}

function WalletForms() {
  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        console.log("Ta instalada")
        const payment = {
          amount: "1000000", // In drops (1 XRP)
          destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",
        };
        sendPayment(payment).then((response) => {
          console.log("Transaction Hash: ", response.result?.hash);
        });
      }
      else {
        console.log("NAO DEU")
      }
    });
  };

  return (
    <div className="WalletButton">
      <button onClick={handleConnect}>PAY</button>
    </div>
  );
}

export default WalletForms;