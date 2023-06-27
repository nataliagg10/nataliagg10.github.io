let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #E74C3C;">Estudio turismo, pero me gusta la programación. Vamos a conocernos un poco.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
