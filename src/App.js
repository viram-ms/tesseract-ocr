import React, { useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import "./App.css";
import Bill from "./assests/bill-13.jpeg";
function App() {
  const worker = createWorker({
    logger: (m) => console.log(m),
  });
  const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng+ara");
    // const {
    //   data: { text },
    // } = await worker.recognize(Bill);
    const { data } = await worker.recognize(Bill);
    console.log(data.text.split("\n"));
    let ocr_data = data.text.split("\n");

    // setOcr(data.hocr);
  };
  const [ocr, setOcr] = useState("Recognizing...");
  useEffect(() => {
    doOCR();
  }, []);
  return (
    <div className="App">
      {/* {ocr} */}
      {/* <p>{ocr}</p> */}
      {/* <p dangerouslySetInnerHTML={{ __html: ocr }} /> */}
    </div>
  );
}

export default App;
