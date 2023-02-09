# Week 4 - Challenge 3

Teléfono React
Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
No se puede introducir un número de más de 9 cifras.
El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.
Separa todo en los siguientes componentes:

Info
Display
Actions
Action
Keyboard
Key
Entrega también un listado de responsabilidades.

Week 4 - Challenge 3
react phone
Here you have the HTML/CSS layout of an application, you will have to program it in React.

You should be able to type a phone number by clicking on the number buttons. The delete key can delete the last digit or delete the entire number, as you prefer.
You will only see either the Call button or the Hang up button, never both at the same time.
You cannot enter a number of more than 9 digits.
The Call button can only be pressed if the number has 9 digits. When it has 9 digits, the button must have the "active" class.
The upper message "Calling..." only appears when the "Call" button is pressed and while the call is in progress. Use the "off" class to control its visibility (the corresponding HTML element must still be there, even if it is not visible).
When you press the "Call" button, it should disappear from the DOM and the "Hang Up" button should appear in its place. The keyboard has to be disabled.
When you press the "Hang Up" button, it should disappear and the "Call" button should appear in its place. The keyboard has to be enabled. In addition, the phone number must be deleted.
If nothing happens after five seconds of the call, it should hang up automatically.
Separate everything into the following components:

info
display
Actions
action
Keyboard
key
Also provide a list of responsibilities.
