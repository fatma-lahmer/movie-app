import React, { useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import Spinner from '../Spinner/Spinner';
import { fetchMovies } from '../../services/api';
import { Movie } from '../../types/movie';
import { HeaderList, ListContainer } from '../../styles/components/listStyle';

interface SearchResultListProps {
  addToFavoritesList: (movie: Movie) => void;
  favoritesList: Movie[];
}
const SearchResultList: React.FC<SearchResultListProps> = ({
  addToFavoritesList,
  favoritesList,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  const { data, error, isLoading }: UseQueryResult<Movie[]> = useQuery({
    queryKey: ['movies', { debouncedSearch }],
    queryFn: () => fetchMovies(debouncedSearch),
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddToFavorites = (movie: Movie) => {
    addToFavoritesList(movie);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ListContainer>
      <HeaderList>Rechercher</HeaderList>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        setDebouncedSearch={setDebouncedSearch}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        data?.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToFavorites={() => handleAddToFavorites(movie)}
            isFavorite={favoritesList.some((favorite) => favorite.id === movie.id)}
          />
        ))
      )}
    </ListContainer>
  );
};

export default SearchResultList;
