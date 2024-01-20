import { isInstalled, getNetwork,  getAddress, getPublicKey, sendPayment   } from "@gemwallet/api";
import { useState } from "react";
import './WalletForms.css';

export interface SendPaymentRequest extends BaseTransactionRequest {
  amount: Amount;
  destination: string;
  destinationTag?: number;
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
  fee?: string;
  sequence?: number;
  accountTxnID?: string;
  lastLedgerSequence?: number;
  memos?: Memo[];
  signers?: Signer[];
  sourceTag?: number;
  signingPubKey?: string;
  ticketSequence?: number;
  txnSignature?: string;
}

function WalletForms() {
const [installed, setInstalled] = useState(false);
const [TransactionHash, setTransactionHash] = useState<string | undefined>('');

  const handleConnect = () => {
    isInstalled().then((response) => {
      if (response.result.isInstalled) {
        setInstalled(true);
        const payment = {
          amount: "1000000", // (1 XRP)
          destination: "rLWQskMM8EoPxaLsmuQxE5rYeP4uX7dhym",
        };
        sendPayment(payment).then((response) => {
          setTransactionHash(response.result?.hash)
        });
      }
      else {
        setInstalled(false);
      }
    });
  };

  return (
    <div className="WalletButton">
      <button className="button" onClick={handleConnect}>PAY</button>
      {installed && <div><p>ww</p></div>}
    </div>
  );
}

export default WalletForms;