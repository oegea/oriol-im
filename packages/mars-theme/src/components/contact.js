import React, { useEffect, useState } from "react";
import { connect, styled, css } from "frontity";
import List from "./list";
import ReadingProgress from "../../../reading-progress";
import axios from 'axios';
import Loader from "react-spinners/ScaleLoader";

const Post = ({ state, actions, libraries }) => {

  //Datos del formulario
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ checkField, setCheckField ] = useState("");
  const [ legalCheck, setLegalCheck ] = useState(false);

  //Control de errores
  const [ nameError, setNameError ] = useState("");
  const [ legalError, setLegalError ] = useState("");
  const [ emailError, setEmailError ] = useState("");
  const [ messageError, setMessageError ] = useState("");

  //Estado
  const [ messageStatus, setMessageStatus ] = useState(0);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();

    //Prismjs to highlight code snippets
    if (Prism !== undefined){
      Prism.highlightAll();
    }
  }, []);

  const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const onContact = async (event) => {
    event.preventDefault();
    let hasErrors = false;
    //Si no hemos aceptado los textos legales, tenemos error
    if (legalCheck === false){
      hasErrors = true;
      setLegalError("Debes aceptar las condiciones legales y de privacidad.");
    }else{
      setLegalError("");
    }

    //El nombre es obligatorio y ha de tener entre 5 y 30 caracteres
    if (name.length < 1){
      hasErrors = true;
      setNameError("Este campo es obligatorio.");
    }else if (name.length > 30){
      hasErrors = true;
      setNameError("El nombre no puede ser mayor a 30 caracteres.");
    }else{
      setNameError("");
    }

    //El email es obligatorio y ha de tener el formato de un e-mail correcto
    if (email.length < 1){
      hasErrors = true;
      setEmailError("Este campo es obligatorio.");
    } else if (!validateEmail(email)){
      hasErrors = true;
      setEmailError("El e-mail introducido no es válido.");
    } else{
      setEmailError("");
    }

    //Por último, el mensaje de contacto ha de tener al menos diez caracteres
    if (message.length < 10){
      hasErrors = true;
      setMessageError("El mensaje debe tener al menos 10 caracteres.")
    } else {
      setMessageError("");
    }


    //Si no ha habido errores, enviamos
    if (hasErrors === false){
      setMessageStatus(1);
      await axios({
        method: 'post',
        url: 'https://wp.oriol.im/contact-form/index.php',
        data: {
          name, email, message, checkField, legalCheck
        }
      });
      setMessageStatus(2);
    }
  };


  const renderForm = () => {
    return (
      <>
        <SectionTitle>💬 Hablemos</SectionTitle>
        <p>Tanto si quieres preguntarme algo, charlar un rato, compartir algo interesante, o proponerme un nuevo proyecto, puedes utilizar este formulario de contacto para contactar conmigo.</p>
        <p>Intentaré en todo caso dar respuesta a todos los mensajes recibidos, siempre y cuando sean relevantes y respetuosos. Pero por favor, ten en cuenta que todo ello depende de mi tiempo libre y excepcionalmente las respuestas pueden demorarse.</p>
        <p>Recuerda que también puedes encontrarme en Twitter bajo el nombre de <a href="https://www.twitter.com/OriolEgea" target="_blank">@OriolEgea</a>.</p>
        <form onSubmit={onContact} autoComplete="off" method="POST">
            <Field type="text" name="name" id="name" placeholder="Name" value={checkField} onChange={(e) => setCheckField(e.target.value)} />
            <r-grid columns="8" css={css`margin-top: 10px;`}>
                <r-cell span="4" span-s="row">
                    <ShortInput type="text" name="f$01" id="f$01" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
                    {nameError.length > 0 && <FormError>{nameError}</FormError>}
                </r-cell>
                <r-cell span="4" span-s="row">
                    <ShortInput type="text" name="honeypot" id="honeypot" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError.length > 0 && <FormError>{emailError}</FormError>}
                </r-cell>
            </r-grid>
            <FullWidthTextarea name="f$03" id="f$03" rows="7" placeholder="Escribe aquí tu mensaje" value={message} onChange={(e) => setMessage(e.target.value)}></FullWidthTextarea>
            {messageError.length > 0 && <FormError>{messageError}</FormError>}
            <p css={css`margin-bottom: 0;`}><input type="checkbox" checked={legalCheck} onChange={()=>{setLegalCheck(!legalCheck); setLegalError("");}} />He leído la <a target="_blank" href="/politica-de-privacidad/">política de privacidad</a> y acepto que mis datos sean tratados con la única finalidad de dar respuesta a mi mensaje por correo electrónico.</p>
            {legalError.length > 0 && <FormError>{legalError}</FormError>}
            { messageStatus == 0 && <input css={css`margin-top: 20px;`} type="submit" value="Enviar" />}
            { messageStatus == 1 && <Loader
                                      color="rgba(12, 17, 43, 0.3)"
                                      radius={0}
                                      margin="3px"
                                      width={4}
                                      height={24}
                                    />}
            
        </form>
      </>
    )
  }

  const renderThanks = () => {
    return (
      <>
        <SectionTitle>✉️ He recibido tu mensaje</SectionTitle>
        <p>Tu mensaje se ha enviado correctamente.</p>
        <p>Puede que dependiendo de mi carga de trabajo, necesite algo de tiempo para responderte, pero trataré de hacerlo en un momento u otro.</p>
        <p>¡Muchas gracias por escribirme!</p>
      </>
    )
  }

  return (
    <>
    <ReadingProgress />
    <Container>
      {/* Formulario que utiliza la técnica honeypot para evitar SPAM automático. */}
      <Content>
        { (messageStatus == 0 || messageStatus == 1) && renderForm()}
        {messageStatus == 2 && renderThanks()}
      </Content>
    </Container>
    </>
  );
};

export default connect(Post);

const SectionTitle = styled.h1`
  font-size: 1.7em;
  margin-bottom: 0;
  border-bottom: 1px solid #9e9e9e;
  padding-bottom: 10px;
`;

const FormError = styled.p`
  color: red;
  font-size: 10px;
  margin-top: 0px;
`;

const Field = styled.input`
    opacity: 0;
    position: fixed;
    bottom: 0;
    z-index: 0;
`;

const ShortInput = styled.input`
    width: calc(100% - 30px);
    font-family: inherit;
`;

const FullWidthTextarea = styled.textarea`
    max-width: calc(100% - 30px);
    width: calc(100% - 30px);
    margin-bottom: 20px !important;
    font-family: inherit;
    resize: none;
    z-index: 1;
    margin-bottom: 3px !important;
`;

const Container = styled.div`
  width: 800px;
  margin: 0;
  padding: 24px;
`;


/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(239, 190, 0) !important;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover{
    border-bottom: 2px solid rgb(239, 190, 0);
  }

  a.no-border{
    border-bottom: none !important;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #fccb0b;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #fccb0b;
    font-weight: bold;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
