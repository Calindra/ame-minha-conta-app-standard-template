import Ame from "ame-super-app-client-web";

export default class Home {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          title: "About",
          subtitle: "Última versão dos componentes",
          to: "/About",
        },
        {
          title: "More",
          subtitle: "Saber Mais",
          to: "/More",
        },
      ]
    };
  }
  navigateTo = (item) => {
    Ame.navigation.navigate(item.to);
  };
}
