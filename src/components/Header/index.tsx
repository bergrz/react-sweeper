type TProps = {
  headerConfig: {
    title: string;
    subtitle: string;
  };
};

export const Header = ({ headerConfig }: TProps) => {
  return (
    <header className="header">
      <hgroup className="header__brand">
        <h1 className="header__title">{headerConfig.title}</h1>
        <h2 className="header__subtitle">{headerConfig.subtitle}</h2>
      </hgroup>
    </header>
  );
};
