import Head from "next/head";
import {
  Button,
  Label,
  ListBox,
  ListBoxContext,
  ListBoxItem,
  ListStateContext,
  Popover,
  Select,
  SelectContext,
  SelectValue
} from "react-aria-components";
import React, { useContext } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <ListBox aria-label="Favorite animal" selectionMode="single">
          <ListBoxChild>Aardvark</ListBoxChild>
          <ListBoxChild>Cat</ListBoxChild>
          <ListBoxChild>Dog</ListBoxChild>
          <ListBoxChild>Kangaroo</ListBoxChild>
          <ListBoxChild>Panda</ListBoxChild>
          <ListBoxChild>Snake</ListBoxChild>
        </ListBox>
        <Select>
          <SelectChild>Favorite Animal</SelectChild>
          <Button>
            <SelectValue/>
            <span aria-hidden="true">▼</span>
          </Button>
          <Popover>
            <ListBox>
              <ListBoxChild>Aardvark</ListBoxChild>
              <ListBoxChild>Cat</ListBoxChild>
              <ListBoxChild>Dog</ListBoxChild>
              <ListBoxChild>Kangaroo</ListBoxChild>
              <ListBoxChild>Panda</ListBoxChild>
              <ListBoxChild>Snake</ListBoxChild>
            </ListBox>
          </Popover>
        </Select>
      </main>
    </>
  );
}

function ListBoxChild(props: { children: string }) {
  const propsContext = useContext(ListBoxContext);
  const stateContext = useContext(ListStateContext);
  console.log("ListBoxContext", propsContext); // null, not set by ListBox?
  console.log("ListStateContext", stateContext); // null, not set by ListBox?
  return <ListBoxItem>{props.children}</ListBoxItem>
}

function SelectChild(props: { children: string }) {
  const propsContext = useContext(SelectContext);
  console.log("SelectContext", propsContext); // not null, set by Select
  return <Label>{props.children}</Label>
}
