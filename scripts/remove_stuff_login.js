// On Stuff.co.nz, a script that contains the modal logic is inserted via a React hook.
// The React hook checks for the existence of the modal script before inserting it.
// This script pre-empts this by inserting an empty script tag with the same ID as the modal script.
document.addEventListener('DOMContentLoaded', function () {
  const emptyScript = document.createElement('script');
  emptyScript.id = 'piano-script';
  document.body.appendChild(emptyScript);
});
