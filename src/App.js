import "./App.css";
import CardApi from "./Component/CardApi";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import CommentApi from "./Component/CommentApi";
import CradPart from "./Component/CradPart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="post-data" element={<CardApi />} />
          <Route path="comment-data" element={<CommentApi />} />
          <Route path="post-data/:id" element={<CradPart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
