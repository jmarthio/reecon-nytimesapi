import styleHeader from "../styles/header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={styleHeader.title}>
        {" "}
        <span>ReeRacoen</span> News{" "}
      </h1>

      <p className={styleHeader.description}>
        Keep up to date with the most popular news
      </p>
    </div>
  );
};

export default Header;
