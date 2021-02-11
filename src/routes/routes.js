import Accueil from "../components/Accueil";
import Jeu from "../components/Jeu";

const routes = {
    home: {
        route: "/",
        component: Accueil,
    },
    play: {
        route: "/play",
        component: Jeu,
    }
};

export default routes;
