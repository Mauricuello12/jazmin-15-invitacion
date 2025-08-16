/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

/* Carrusel */
.carousel {
  position: relative;
  width: 100%;
  height: 90vh; /* PC */
  overflow: hidden;
}

@media (max-width: 768px) {
  .carousel {
    height: 70vh; /* Celular */
  }
}

.carousel .slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* mantiene proporción */
}

/* Botones del carrusel */
.carousel button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 50%;
}
.carousel .prev { left: 10px; }
.carousel .next { right: 10px; }

/* Puntos indicadores */
.dots {
  text-align: center;
  position: absolute;
  bottom: 15px;
  width: 100%;
}
.dots span {
  height: 12px;
  width: 12px;
  margin: 0 3px;
  background: rgba(255,255,255,0.7);
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
}
.dots .active {
  background: #fff;
}

/* Sección texto */
.intro {
  text-align: center;
  padding: 40px 20px;
  background: #f8f8f8;
}
.intro h1 {
  font-size: 2.5em;
  color: #b38b59;
}
.intro h2 {
  font-size: 2em;
  margin-bottom: 15px;
  color: #444;
}
.intro p {
  font-size: 1.2em;
  margin: 5px 0;
}
