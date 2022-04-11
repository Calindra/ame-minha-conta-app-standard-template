import Ame from "ame-super-app-client-web"

export default class About {
  navigateTo = (item) => {
    Ame.navigation.navigate(item);
  };
}
