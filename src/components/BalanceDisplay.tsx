type BalanceDisplayProps = {
  balance: number;
};

function BalanceDisplay({ balance }: BalanceDisplayProps) {
    return (
        <section>
            <h2>Company Balance</h2>
            <p>₹{balance.toLocaleString('en-IN')}</p>
        </section>
    );
}

export default BalanceDisplay;