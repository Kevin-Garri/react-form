import React, { useState } from 'react';

const list = []
//titolo articolo e lista articoli
const Form = () => {
  const [title, setTitle] = useState(list);
  const [articles, setArticles] = useState({ text: "" });

  //funzione submit
  const handlerSubmit = (e) => {
    e.preventDefault();
    setTitle([articles, ...title]);
  };

};

export default Form;