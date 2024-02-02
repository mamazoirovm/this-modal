import React, { useEffect, useState } from "react";
import "./index.css";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };
  const openDialogTwo = () => {
    setIsOpenTwo(true);
  };
  const openDialogThree = () => {
    setIsOpenThree(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };
  const closeDialogTwo = () => {
    setIsOpenTwo(false);
  };
  const closeDialogThree = () => {
    setIsOpenThree(false);
  };
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeDialogTwo();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeDialogThree();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  return (
    <div className="container">
      <div className="flex">
        <button onClick={openDialog}>Bosing 1</button>
        <button onClick={openDialogTwo}>Bosing 2</button>
        <button onClick={openDialogThree}>Bosing 3</button>
      </div>

      <dialog className="devoop" open={isOpen}>
        <div className="dialog">
          <div className="dialog-content">
            <h2>Salom aka?</h2>
            <p>Najot ta'lim Dasturlash kursiga xush kelibsiz</p>
            <button onClick={closeDialog}>Okay</button>
          </div>
        </div>
      </dialog>

      <dialog className="devoop" open={isOpenTwo}>
        <div className="dialog">
          <div className="dialog-content">
        
            <h2>Salom aka? nimagap</h2>
            <p>Najot ta'lim Grafik Dizayn kursiga xush kelibsiz!</p>
            <h4>Esc tugmasini bosing</h4>
            
          </div>
        </div>
      </dialog>

      <dialog className="devoop" open={isOpenThree}>
        <div className="dialog">
          <div className="dialog-content">
            <div className="closes">
              <button className="x-close" onClick={closeDialogThree}><i className="fa-solid fa-xmark"></i></button>
            </div>
            
            <h2>Salom aka?</h2>
            <p>Najot ta'lim SMM kursiga xush kelibsiz!</p>
            <h4>Esc tugmasi yoki x tugmasini bosing</h4>
            
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default App;
