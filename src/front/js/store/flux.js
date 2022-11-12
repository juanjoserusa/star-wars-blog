const getState = ({ getStore, getActions, setStore }) => {
  let vehiclesIdArray = [0, 4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
  return {
    store: {
      characters: [],
      planets: [],
      vehicles: [],
      vehiclesurl: vehiclesIdArray.map(
        (id) =>
          "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
      ),
      favorites: [],
    },

    actions: {
      fetchCharacter: () => {
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((data) => setStore({ characters: data.results }));
      },

      fetchPlanets: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((data) => setStore({ planets: data.results }));
      },

      fetchVehicles: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((response) => response.json())
          .then((data) => setStore({ vehicles: data.results }));
      },
      addToFavorites: (name) => {
        setStore({ favorites: [...getStore().favorites, name] });
      },
      deleteFavorite: (i) => {
        const store = getStore();
        const newList = store.favorites.filter((name, index) => index !== i);
        setStore({ favorites: newList });
      },
    },
  };
};
export default getState;
