import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="w-full flex justify-center">
      <div className="w-full max-w-screen-xl flex flex-col items-center justify-center p-6">
        <p>&copy;Copyright 2023</p>
      </div>
    </footer>
  );
}
