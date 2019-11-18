const excelDownloadButton = document.getElementById('excelDownload');

excelDownloadButton.addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/excel', { method: 'POST' })
  window.location = 'http://localhost:3000/excel';
});