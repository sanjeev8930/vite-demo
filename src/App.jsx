import { useState } from 'react';
import reactLogo from './assets/react.svg';
function App() {
  const [count, setCount] = useState(0);

  return (
  <section class="main">

  </section>

  );
}

export default App
$(".navbar-toggler").click(function(){
  $(".navbar-toggler-icon").toggleClass("closeButton");
});