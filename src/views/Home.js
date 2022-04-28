import Ame from "ame-super-app-client-web";

export default class Home {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          title: "Sobre",
          to: "/About",
        },
        {
          title: "Saiba mais",
          to: "/More",
        },
      ]
    };
  }
  navigateTo = (item) => {
    Ame.navigation.navigate(item.to);
  };
}
