import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { getTranslate } from '../src/assets/function/translateService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './assets/component/Footer';

export default function Component() {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    const result = getTranslate(inputText);
    setTranslatedText(result);
  };

  return (
    <>
      <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center backGround">
        <div className="w-100" style={{ maxWidth: '700px' }}>
        <h1 style={{ textAlign: 'center' ,marginBottom : 100, color: "white"}}>Vozona Gasy</h1>
          <Form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
            <div className="position-relative flex-grow-1">
              <Form.Control type="text" placeholder="Entrez un texte à traduire" value={inputText} onChange={(e) => setInputText(e.target.value)} className='formControl' />
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search position-absolute" viewBox="0 0 16 16" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }}>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <Button onClick={handleTranslate} className='buttonSend'>
              TRANSLATE
            </Button>
          </Form>

          {translatedText && (
            <div className="mt-4 p-4 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <h3 className="mb-2 text-white">Traduction:</h3>
              <p className="text-white-50">{translatedText}</p>
            </div>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}