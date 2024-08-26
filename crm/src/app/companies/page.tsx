import React from 'react';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import SearchInput from '../components/search-input';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar>
        <SearchInput />
      </Toolbar>
    </>
  );
}
