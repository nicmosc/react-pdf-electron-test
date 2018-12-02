import React from "react";
import ReactDOM from "react-dom";
import { BlobProvider, PDFViewer } from '@react-pdf/renderer';

import "./styles.css";

import MyDocument from './Document';

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
      <BlobProvider document={MyDocument()}>
        {({ url }) => <iframe src={url} style={{ width: '100%', height: '100%' }} />}
      </BlobProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
