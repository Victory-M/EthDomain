import SearchImg from "../assets/search (1).png";
import Register from "../assets/contract.png";
import BlockChain from "../assets/blockchain.png";

const Search = () => {
  return (
    <header>
      <p className="header__subtitle">It all begins with a domain name.</p>
      <h2 className="header__title">
        Decentralized naming for wallets, websites, & more.
      </h2>
      <div className="header-icons">
        <div className="">
          <img src={SearchImg} alt="search" />
          <p>Search</p>
        </div>
        <div className="">
          <img src={Register} alt="register" />
          <p>Register</p>
        </div>
        <div className="">
          <img src={BlockChain} alt="blockchain" />
          <p>Manage</p>
        </div>
      </div>
    </header>
  );
};

export default Search;
