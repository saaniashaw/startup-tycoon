type BalanceDisplayProps = {
  balance: number;
};

function BalanceDisplay({ balance }: BalanceDisplayProps) {
    return (
        <section className="balance-card">
            <h2>Company Balance</h2>
            <p>₹{balance.toLocaleString('en-IN')}</p>
        </section>
    );
}

export default BalanceDisplay;