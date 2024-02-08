import SearchResultList from './components/Search/SearchResultList';
import FavList from './components/Favorites/FavList';
import ChosenMovieCard from './components/RandomSearch/ChosenMovieCard';
import { useFavoritesList } from './hooks/useMovieList/useFavoritesList';
import { useWatchList } from './hooks/useMovieList/useWatchList';
import {
  AppContainer,
  ListsContainer,
  ChosenMovieContainer,
  Separator,
} from './styles/components/appStyle';
const App: React.FC = () => {
  const { favoritesList, addToFavoritesList, removeFromFavoritesList } = useFavoritesList();
  const { watchList, addToWatchList, removeFromWatchList } = useWatchList();

  return (
    <AppContainer>
      <ListsContainer>
        <SearchResultList addToFavoritesList={addToFavoritesList} favoritesList={favoritesList} />
        <Separator />
        <FavList
          favorites={favoritesList}
          removeFromFavoritesList={removeFromFavoritesList}
          addToWatchList={addToWatchList}
          removeFromWatchList={removeFromWatchList}
          watchList={watchList}
        />
      </ListsContainer>

      <ChosenMovieContainer>
        <ChosenMovieCard watchList={watchList} />
      </ChosenMovieContainer>
    </AppContainer>
  );
};

export default App;
