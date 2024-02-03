// On Stuff.co.nz, the modal is inserted via a React hook.
// This script pre-empts it by adding an empty 'piano-script' element to the DOM before the hook runs.
document.addEventListener('DOMContentLoaded', function () {
  const emptyScript = document.createElement('script');
  emptyScript.id = 'piano-script';
  emptyScript.style.display = 'none';
  document.body.appendChild(emptyScript);
});
