type CompanyHeaderProps = {
  companyName: string;
};

function CompanyHeader({ companyName }: CompanyHeaderProps) {
  return (
    <header>
      <h1>{companyName}</h1>
      <p>Build your dream company!</p>
    </header>
  );
}

export default CompanyHeader;