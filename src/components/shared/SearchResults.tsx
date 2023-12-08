import { Models } from 'appwrite';
import React from 'react'
import GridPostList from './GridPostList';
import { Loader } from 'lucide-react';
type searchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}
const SearchResults = ({isSearchFetching, searchedPosts} : searchResultProps) => {

  if(isSearchFetching) <Loader />

  if(searchedPosts && searchedPosts.documents.length > 0){
    return (
      <GridPostList posts={searchedPosts.documents} />
    )
  } 

  return (
    <p className='text-light-4 mt-10 text-center w-full'>No Result Found</p>
  )
}

export default SearchResults